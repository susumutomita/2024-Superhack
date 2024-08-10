import { BigInt as GraphBigInt } from "@graphprotocol/graph-ts";
import { SenryuSubmitted, Voted } from "../generated/SenryuGame/SenryuGame";
import { Senryu, Vote } from "../generated/schema";

export function handleSenryuSubmitted(event: SenryuSubmitted): void {
  let senryu = new Senryu(event.params.id.toString());
  senryu.content = event.params.content;
  senryu.author = event.params.author;
  senryu.voteCount = BigInt.fromI32(0); // 初期化時にBigInt型で0を設定

  senryu.save();
}

export function handleVoted(event: Voted): void {
  let senryu = Senryu.load(event.params.senryuId.toString());

  if (senryu) {
    senryu.voteCount = senryu.voteCount.plus(BigInt.fromI32(1)); // BigInt型のplusメソッドを使用
    senryu.save();

    let vote = new Vote(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString(),
    );
    vote.senryuId = senryu.id;
    vote.voter = event.params.voter;

    vote.save();
  }
}
