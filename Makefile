.PHONY: install
install:
	npm install

.PHONY: install_all
install_all:
	npm run install-all

.PHONY: setup_husky
setup_husky:
	npm run prepare

.PHONY: clean
clean:
	npm run clean

.PHONY: lint
lint:
	npm run lint

.PHONY: format_contract
format_contract:
	npm run format:contract

.PHONY: test_contract
test_contract:
	npm run test:contract

.PHONY: before_commit
before_commit: lint format_contract test_contract

.PHONY: start_frontend
start_frontend:
	cd frontend && npm start

.PHONY: start_backend
start_backend:
	cd backend && npm start

.PHONY: start
start:
	npx concurrently "make start_backend" "make start_frontend"

# 以下は新しく追加したターゲット
.PHONY: build_backend
build_backend:
	cd backend && forge build

.PHONY: copy_abi
copy_abi: build_backend
	mkdir -p frontend/artifacts/contracts/SenryuGame.sol
	cp backend/out/SenryuGame.sol/SenryuGame.json frontend/artifacts/contracts/SenryuGame.sol/SenryuGame.json

.PHONY: all
all: build_backend copy_abi

.PHONY: help
help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  install         Install npm packages"
	@echo "  install_all     Run npm install-all"
	@echo "  setup_husky     Setup Husky"
	@echo "  clean           Clean the project"
	@echo "  lint            Run linter"
	@echo "  format_contract Format contract"
	@echo "  test_contract   Test contract"
	@echo "  before_commit   Run checks before commit"
	@echo "  start_frontend  Start frontend"
	@echo "  start_backend   Start backend"
	@echo "  start           Start both frontend and backend"
	@echo "  build_backend   Build backend contracts with Forge"
	@echo "  copy_abi        Copy ABI files to frontend"
	@echo "  all             Build backend and copy ABI files"
	@echo "  help            Show this help message"
