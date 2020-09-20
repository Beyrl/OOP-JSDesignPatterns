//first way to create a object
var checkObject = function () {}
checkObject.checkName = function () {
    console.log(0)
}
checkObject.checkMail = function () {
    console.log(1)
}
checkObject.checkPsw = function () {
    console.log(2)
}
checkObject.checkName()

//second way to create a object
//reason:checkObject2 func return an object
var checkObject2 = function () {
    return {
        checkName :function () {
            console.log("01")
        },
        checkMail :function () {
            console.log("02")
        },
        checkPsw :function () {
            console.log("03")
        }
    }
}
var a2 = checkObject2()
a2.checkName();

//Third way create a class
//minuses:Each time we create a new object ,this new object will copy the attribute in the class.
//so, sometimes it's wasteful
var CheckObject3 = function () {
    this.checkName = function () {
        console.log("30")
    }
    this.checkMail = function () {
        console.log("31")
    }
    this.checkPsw = function () {
        console.log("32")
    }
}
var a3 = new CheckObject3();
a3.checkName()

//fourth way create a class
//avoid wasteful
var CheckObject4 = function () {}
CheckObject4.prototype={
    checkName :function () {
        console.log("41")
    },
    checkMail :function () {
        console.log("42")
    },
    checkPsw :function () {
        console.log("43")
    }
}
var a4 = new CheckObject4();
a4.checkName();
a4.checkMail();
a4.checkPsw();

//fifth way create a class
//use it in chain
//reason:
var CheckObject5 = function () {}
CheckObject5.prototype={
    checkName :function () {
        console.log("51");
        return this;
    },
    checkMail :function () {
        console.log("52");
        return this;
    },
    checkPsw :function () {
        console.log("53");
        return this;
    }
}
var a5 = new CheckObject5();
a5.checkName().checkMail().checkPsw();
