"use client";
import Link from "next/link";
import { Button, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to Senryu Game
      </Typography>
      <div className="space-x-4">
        <Link href="/submit-senryu" passHref>
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-500 hover:bg-blue-700"
          >
            Submit Senryu
          </Button>
        </Link>
        <Link href="/senryus" passHref>
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-500 hover:bg-blue-700"
          >
            View Senryus
          </Button>
        </Link>
        <Link href="/vote-result" passHref>
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-500 hover:bg-blue-700"
          >
            Vote Result
          </Button>
        </Link>
      </div>
    </Container>
  );
}
