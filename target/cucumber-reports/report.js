$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature/customer/employee.feature");
formatter.feature({
  "name": "Customer Operations",
  "description": "I want to verify create,read,update,delete operations of customer",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@all"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "BearER token availble",
  "keyword": "Given "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.bearer_token_availble()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify  create new customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@tag1"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "BearER token availble",
  "keyword": "Given "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.bearer_token_availble()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "you prepare create customer \"Susmitha\",101,\"susmitha2012.ravella@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.you_prepare_create_customer(java.lang.String,java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the post call",
  "keyword": "And "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.send_the_post_call()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate 200 response code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.validate_response_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate \"Success\" message in body",
  "keyword": "And "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.validate_message_in_body(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "create multiple customers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "BearER token availble",
  "keyword": "Given "
});
formatter.step({
  "name": "you prepare create customer \"\u003cname\u003e\",\"\u003cid\u003e\",\"\u003cemailid\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "send the post call",
  "keyword": "And "
});
formatter.step({
  "name": "validate 200 response code",
  "keyword": "Then "
});
formatter.step({
  "name": "validate \"Success\" message in body",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "id",
        "emailid"
      ]
    },
    {
      "cells": [
        "susmitha",
        "101",
        "susmitha2012.ravella@gmail.com"
      ]
    },
    {
      "cells": [
        "sruthi",
        "102",
        "sruthi.ravella@gmail.com"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "BearER token availble",
  "keyword": "Given "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.bearer_token_availble()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create multiple customers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "BearER token availble",
  "keyword": "Given "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.bearer_token_availble()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "you prepare create customer \"susmitha\",\"101\",\"susmitha2012.ravella@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.you_prepare_create_customer1(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the post call",
  "keyword": "And "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.send_the_post_call()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate 200 response code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.validate_response_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate \"Success\" message in body",
  "keyword": "And "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.validate_message_in_body(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "BearER token availble",
  "keyword": "Given "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.bearer_token_availble()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create multiple customers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "BearER token availble",
  "keyword": "Given "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.bearer_token_availble()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "you prepare create customer \"sruthi\",\"102\",\"sruthi.ravella@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.you_prepare_create_customer1(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the post call",
  "keyword": "And "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.send_the_post_call()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate 200 response code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.validate_response_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate \"Success\" message in body",
  "keyword": "And "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.validate_message_in_body(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "BearER token availble",
  "keyword": "Given "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.bearer_token_availble()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create  customers with single scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@skip"
    }
  ]
});
formatter.step({
  "name": "BearER token availble",
  "keyword": "Given "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.bearer_token_availble()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "create customers with data",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.create_customers_with_data(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the post call",
  "keyword": "And "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.send_the_post_call()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate 200 response code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.validate_response_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate \"Success\" message in body",
  "keyword": "And "
});
formatter.match({
  "location": "com.rest.ops.steps.EmployeeStepDef.validate_message_in_body(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});