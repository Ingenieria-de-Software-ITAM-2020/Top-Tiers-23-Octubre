jQuery("#simulation")
  .on("click", ".s-8a778328-84da-49c1-8f22-f99278bfa781 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/40e22b66-65ae-4ef9-99b0-b393c5cce228"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_11 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_11 span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_11 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_11": {
                      "attributes": {
                        "font-size": "0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_11 > .borderLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#F9F8FC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#F9F8FC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F9F8FC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#F9F8FC"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_11 span": {
                      "attributes": {
                        "color": "#FF2D55",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt",
                        "line-height": "23px"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_11 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#F9F8FC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#F9F8FC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F9F8FC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#F9F8FC"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_12 span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Image_8 svg": {
                      "attributes": {
                        "overlay": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_12 span": {
                      "attributes": {
                        "color": "#007DFF"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Image_8 svg": {
                      "attributes": {
                        "overlay": "#157EFB"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_13 span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_13 span": {
                      "attributes": {
                        "color": "#007DFF"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "#157EFB"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_17": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_17 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_17 span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_17 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_17": {
                      "attributes": {
                        "font-size": "0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_17 > .borderLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#F9F8FC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#F9F8FC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F9F8FC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#F9F8FC"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_17 span": {
                      "attributes": {
                        "color": "#FF2D55",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt",
                        "line-height": "23px"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_17 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#F9F8FC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#F9F8FC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F9F8FC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#F9F8FC"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".s-8a778328-84da-49c1-8f22-f99278bfa781 .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_1 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_2 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_3 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_4 span": {
                      "attributes": {
                        "color": "#CBCBCB"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_5 span": {
                      "attributes": {
                        "color": "#CBCBCB"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_6 span": {
                      "attributes": {
                        "color": "#CBCBCB"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-8a778328-84da-49c1-8f22-f99278bfa781 .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_1 span": {
                      "attributes": {
                        "color": "#515356"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_2 span": {
                      "attributes": {
                        "color": "#515356"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_3 span": {
                      "attributes": {
                        "color": "#515356"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_4 span": {
                      "attributes": {
                        "color": "#515356"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_5 span": {
                      "attributes": {
                        "color": "#515356"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-8a778328-84da-49c1-8f22-f99278bfa781 #s-Paragraph_6 span": {
                      "attributes": {
                        "color": "#515356"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });