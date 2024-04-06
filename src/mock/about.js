import Mock from "mockjs";
Mock.mock("/api/about", "get", {
  code: 0,
  msg: "",
    data: "https://www.7k7k.com/",
});
