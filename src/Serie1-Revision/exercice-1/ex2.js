const user1 = {
    firstname: "Marc",
    lastname: "Tremblay",
    fullname: function() {
        return `Je me nomme ${this.firstname} ${this.lastname}.`;
    }
};

console.log(user1.fullname());
