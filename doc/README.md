[![Build Status](https://travis-ci.org/%USERNAME%/%PROJECTNAME%.svg?branch=master)](https://travis-ci.org/%USERNAME%/%PROJECTNAME%) 

%PROJECTNAME%
=============

> An overview description is given here...

<br>

## Screenshot
[![Description Video](https://raw.githubusercontent.com/%USERNAME%/%PROJECTNAME%/master/doc/img/description.gif)](https://www.youtube.com/watch?v=xxxxxxxxxxx)

<br>

<img align="left" width="30%" src="https://raw.githubusercontent.com/%USERNAME%/%PROJECTNAME%/master/doc/img/screenshot1.jpg">
<img align="left" width="30%" src="https://raw.githubusercontent.com/%USERNAME%/%PROJECTNAME%/master/doc/img/screenshot2.jpg">
<img align="left" width="30%" src="https://raw.githubusercontent.com/%USERNAME%/%PROJECTNAME%/master/doc/img/screenshot3.jpg">

<br>

## Contents

> [Requirement](#requirement)
>
> [Version](#version)
>
> [Installation](#installation)
>
> [Usage](#usage)
>
> [Functions](#functions)  
>- [Configuration](#configuration)
>- [Function1](#function1)
>- [Function2](#function2)
>
> [Contributing](#contributing)  
>
> [License](#license)
>
> [Developer](#developer)  

<br>

---

<br>

## Requirement
The browser supports Javascript (ECMAScript 2015). Operation confirmed in the following browser.
- Chrome
- Firefox
- Opera
<br>

---

<br>

## Version
We manage the project version on [VERSION.md](./doc/VERSION.md)
The versioning scheme we refer is [Semantic Versioning](https://semver.org/)

<br>

---

<br>




## Installation

#### Option1 - Clone Repository

Clone this repo using `https://github.com/%USERNAME%/%PROJECTNAME%` or download files separately to your local machine.  Below is an example of folder structure

```bash
[Working Directory]
 |     
 |_ build
 |     |_ script      
 |     |    |_main.min.js   //Minified script file
 |     |      
 |     |_style
 |          |_main.css      //style file
 |     
 |_ index.html              //main html
```
<br>

#### Option2 - Use CDN
```html
<script type="text/javascript" src="https://raw.githack.com/%USERNAME%/%PROJECTNAME%/master/build/script/main.js"></script>
```
<br>

---

<br>

## Usage

### Initialise App
```javascript
 const app = new %PROJECTNAME%();
 const option = {
	option1: conf1,
	option2: conf2
 };
 app.init(option);
```
<br>

---

<br>


## Functions
<br>

### Configuration

#### %PROJECTNAME%.prototype.init (option)
	@void init : description of init (must to execute)
	@obj option : description of option
 
##### example
```javascript
app.init({
	option1: conf1,
	option2: conf2
});
```
<br>

<a id="function1"></a>
## Function1

#### %PROJECTNAME%.prototype.function1 (arg1, arg2)
	@bool function1 : description of function1
	@str arg1 : description of arg1
	@int arg2 : description of arg2

##### example
```javascript
app.function1('somestring',1000);
```
<br>

<a id="function2"></a>
## Function2

#### %PROJECTNAME%.prototype.function2 ()
	@promise function2 : description of function2
	@obj data{str data1, int data2}

##### example
```javascript
app.function2().then((data)=>{
	console.log(data.data1);
	console.log(data.data2);
).catch((error)=>{
    console.log(error);
});
```
<br>

---

<br>

## Contributing
 We always welcome your ideas and feedback. 
 To contribute this project, please see [CONTRIBUTING.md](./doc/CONTRIBUTING.md) at first.

<br>


## Licence
[Apache Licence 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt) 

<br>

## Author
[%USERNAME%]()  