x<-NULL
x<-c(x,3)
x<-c(x,5)
a <- c(1,3,4,3,5.5)
b <- c("john","david","kumar","jane","mariam")
c <- c(TRUE,TRUE,FALSE,T,F)
dice <- sample(1:6, 50, replace=T)
dice[5] <-55
M <- (dice)
dim(M) <- c(10,5)
TM <-t(M)
"some text" -> M[2,1]
MyList <- list(M, a, dice)
MyDataFrame <- data.frame(a, b, c)
radius <- 5
CircleArea <- function(radius) {radius*radius*pi}
