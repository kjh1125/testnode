const express = require("express"); // express 인스턴스를 사용하겠다는 코드. require로 원하는 인스턴스를 받아 사용할 수 있게 해줌. 
const visitorRouter = express.Router(); // express 프레임워크 라우터를 사용하기 위해 변수를 선언. 
const visitor = require("../controller/VisitorController"); 

// 라우터는 URI 요청에 응답하는 방식을 말함.
// 해당 form URI안에서 루트로 들어올 때에 응답 방식입니다. 
visitorRouter.get("/", visitor.get_visitors);
visitorRouter.post("/write", visitor.post_comment);
visitorRouter.get("/get", visitor.get_visitor);
visitorRouter.patch("/edit", visitor.patch_comment);
visitorRouter.delete("/delete", visitor.delete_comment);

module.exports = visitorRouter; // module.exports는 global 전역으로 해당 라우터를 사용하게 해줌.