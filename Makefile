### Makefile for install of develepment environment
#
# install command
# > make install user=<user name> project=<project name>
#
# edit command
# > make edit

USER_NAME := $(user)
PROJECT_NAME := $(project)
EXIST := $(shell ls | grep ${project})

.PHONY: install
install:
ifdef USER_NAME
ifdef PROJECT_NAME
ifeq (${EXIST}, ${PROJECT_NAME})
	@echo "Project $(PROJECT_NAME) already exists."
else
	@make setup_package_json
endif
else
	@echo "Please specify your project name."
endif
else
	@echo "Please specify user name."
endif


.PHONY: edit
edit:
	@make npm_install 

setup_package_json: ./package.json
	@sed -e "s/%USERNAME%/$(USER_NAME)/g; s/%PROJECTNAME%/$(PROJECT_NAME)/g;" ./package.json > package.json.master && \
	mv package.json.master package.json
	@make setup_gitconfig

setup_gitconfig: ./.gitconfig
	@sed -e "s/%USERNAME%/$(USER_NAME)/g; s/%PROJECTNAME%/$(PROJECT_NAME)/g;" ./.gitconfig > .gitconfig.master && \
	mv .gitconfig.master .gitconfig
	@make setup_readme_md

setup_readme_md: ./README.md
	mv README.md ./doc/USAGE.md 
	@sed -e "s/%USERNAME%/$(USER_NAME)/g; s/%PROJECTNAME%/$(PROJECT_NAME)/g;" ./doc/README.md > ./README.md && \
	@make setup_version_md

setup_version_md: ./doc/VERSION.md
	@sed -e "s/%USERNAME%/$(USER_NAME)/g; s/%PROJECTNAME%/$(PROJECT_NAME)/g;" ./doc/VERSION.md > ./doc/VERSION.md.master && \
	mv ./doc/VERSION.md.master ./doc/VERSION.md
	@make setup_contributing_md

setup_contributing_md: ./doc/CONTRIBUTING.md
	@sed -e "s/%USERNAME%/$(USER_NAME)/g; s/%PROJECTNAME%/$(PROJECT_NAME)/g;" ./doc/CONTRIBUTING.md > ./doc/CONTRIBUTING.md.master && \
	mv ./doc/CONTRIBUTING.md.master ./doc/CONTRIBUTING.md
	@make setup_index_html

setup_index_html: ./index.html
	@sed -e "s/%USERNAME%/$(USER_NAME)/g; s/%PROJECTNAME%/$(PROJECT_NAME)/g;" ./index.html > index.html.master && \
	mv index.html.master  index.html
	@make setup_cargo_toml

setup_cargo_toml: ./src/public/wasm/Cargo.toml
	@sed -e "s/%USERNAME%/$(USER_NAME)/g; s/%PROJECTNAME%/$(PROJECT_NAME)/g;" ./src/public/wasm/Cargo.toml > ./src/public/wasm/Cargo.toml.master && \
	mv ./src/public/wasm/Cargo.toml.master ./src/public/wasm/Cargo.toml
	@make download_license

download_license: ./doc
	curl https://www.apache.org/licenses/LICENSE-2.0.txt > ./doc/LICENSE
	@make git_init

git_init:
	@git init && git add -A && git commit --allow-empty -m 'first commit'
	@make npm_install 

npm_install:./package.json
	@echo "Now installing node modules. Please wait.." && \
	npm install
	@make docker_compose

docker_compose:./docker-compose.yml
	@docker-compose -f ./docker-compose.yml up --build