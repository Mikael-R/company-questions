mount: # for first time run mount insted of start
	docker-compose up --build -d web

start:
	docker-compose up --build -d web

down:
	docker-compose down

storybook:
	docker-compose run -d storybook

tests:
	docker-compose run e2e

logs:
	docker logs company-questions -f

