Feature: Division

  @div
  Scenario Outline: Validation of division
    Given two digits to be divided
    When  division function is called with two digits "<a>" and "<b>"
    Then  result <expected> is validated
    Examples:
      | a  | b | expected |
      | 15 | 5 | 3        |
      | 20 | 4 | 5        |
      | 18 | 9 | 2        |

