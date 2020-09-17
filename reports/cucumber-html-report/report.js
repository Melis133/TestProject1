$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/division.feature");
formatter.feature({
  "name": "Division",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validation of division",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@div"
    }
  ]
});
formatter.step({
  "name": "two digits to be divided",
  "keyword": "Given "
});
formatter.step({
  "name": "division function is called with two digits \"\u003ca\u003e\" and \"\u003cb\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "result \u003cexpected\u003e is validated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "a",
        "b",
        "expected"
      ]
    },
    {
      "cells": [
        "15",
        "5",
        "3"
      ]
    },
    {
      "cells": [
        "20",
        "4",
        "5"
      ]
    },
    {
      "cells": [
        "18",
        "9",
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validation of division",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@div"
    }
  ]
});
formatter.step({
  "name": "two digits to be divided",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.DivisionStep.two_digits_to_be_divided()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "division function is called with two digits \"15\" and \"5\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.DivisionStep.division_function_is_called_with_two_digits_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result 3 is validated",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DivisionStep.result_is_validated(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of division",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@div"
    }
  ]
});
formatter.step({
  "name": "two digits to be divided",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.DivisionStep.two_digits_to_be_divided()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "division function is called with two digits \"20\" and \"4\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.DivisionStep.division_function_is_called_with_two_digits_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result 5 is validated",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DivisionStep.result_is_validated(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of division",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@div"
    }
  ]
});
formatter.step({
  "name": "two digits to be divided",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.DivisionStep.two_digits_to_be_divided()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "division function is called with two digits \"18\" and \"9\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.DivisionStep.division_function_is_called_with_two_digits_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result 2 is validated",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DivisionStep.result_is_validated(int)"
});
formatter.result({
  "status": "passed"
});
});