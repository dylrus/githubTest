const currentUser = {
  firstName: "Dylan",
  lastName: "Russell",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

currentUser.fullname();

const testFunction = () =>
  console.log("Hello you courteous person this is a github test file");
