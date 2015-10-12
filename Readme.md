#Cheatsheet

General use guides for working with MongoDB, MongoChef, R, Terminal, Atom etc.

## Peter Lauries 6 Key things
Best practice for working with code.
1. Source Control
2. Formal Releases
3. Automated Builds
4. Developer Tests
5. Continuous Integration
6. Overarching elements feeding into the above:
  * Environment
  * Collaboration  

## Working with MongoDB & MongoChef
1. Open Terminal
2. cd Source/uni_mthesis
3. atom .
4. in terminal set ```mongod -f mongod.conf```
  * terminal will run the database
5. Open MongoChef and connect to databases
6. To close the session ```ctrl + c``` in terminal and ```cmnd + q``` MongoChef
7. Commit to Git ```git commit```

## Commands
### Atom

 ``` Cmd + shift + p ``` - opens up the command finder in atom

 ``` Cmd + shift + h ``` - opens up the git menu in atom

 ```Cmd + shift + p -> markdown preview```  - opens up the command window -> search for markdown preview


### R Studio

```> mongo <- mongo.create(host = '10.27.0.2', db = 'upwork')``` - connect to database


###Terminal

```atom .``` opens atom window in directory folder

```cd``` change directory

```ls``` provides a list

```tab``` brings up options for next item in the command

```mongod -f mongod.conf --fork```  will fork the database

```ctrl + c``` cancels action operating in terminal

```ps``` program that lists all processes

```aux``` normal processes + user processes + system processes

```|``` is a pipe for shifting data between programs

```ps aux | grep mongo``` lists all processes with mongo

```kill``` signal to following process command


###Git
```git commit```

```git add```

```git status```


##Useful Links

[Syntax Highlighting for the Web](https://highlightjs.org/static/demo/)

###R

[Style Guide](http://adv-r.had.co.nz/Style.html)

[Learning R](https://www.datacamp.com/)

[R Code School](https://www.datacamp.com/)

###MongoDB

http://brockt.tumblr.com/post/35055958195/getting-started-with-mongodb-on-mac-osx

###MongoChef

[Datas manipulation in MongoDB](http://blog.physalix.com/datas-manipulation-in-mongodb-rename-field-change-type-add-sub-document/)


###RMongo

https://cran.r-project.org/web/packages/RMongo/index.html

https://cran.r-project.org/web/packages/RMongo/RMongo.pdf

http://watson.nci.nih.gov/~sdavis/blog/rmongodb-using-R-with-mongo/

###rmongodb

[Running advanced MongoDB queries in R with rmongodb](http://stackoverflow.com/questions/10798707/running-advanced-mongodb-queries-in-r-with-rmongodb)

Installing:
1. install.packages("rmongodb") in Rstudio console
help("mongo.create")

###Markdown

GitHub Guides [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

Daring Fireball [Markdown:Syntax](http://daringfireball.net/projects/markdown/syntax)

Atlassian [Markdown syntax guide](https://confluence.atlassian.com/stash/markdown-syntax-guide-312740094.html#notfound)

Markdown Guide [Style Guide Basics](http://markdown-guide.readthedocs.org/en/latest/basics.html)

Adam-p (Git Hub) [Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
