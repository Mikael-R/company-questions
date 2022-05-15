start:
	docker-compose up -d web

down:
	docker-compose down

storybook:
	docker-compose run -d storybook

tests:
	docker-compose run e2e

logs:
	docker logs company-questions -f

