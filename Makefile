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

.PHONY: test_contract
test_contract:
	npm run test:contract

.PHONY: before_commit
before_commit: lint	test_contract

.PHONY: start_frontend
start_frontend:
	cd frontend && npm start

.PHONY: start_backend
start_backend:
	cd backend && npm start

.PHONY: start
start:
	npx concurrently "make start_backend" "make start_frontend"
