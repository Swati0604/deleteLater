const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const schema = {
  title: 'Landing Page',
  type: 'landingPage',
  widgets: [
    {
      type: 'announcement',
      data: {
          title: 'Super Deal! Free Shipping on Orders Over $50'
      },
      attributes: {
          styles: {
              height: "30px",
              backgroundColor: "teal",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "500"
          }
      },
    },
    {
      type: 'navbar',
      attributes: {
        styles: {
          height: '60px',
          padding: '10px 40px'
        }
      },
      data: {
        type: 'sections', 
        leftSection: {
          type: 'anchorLink',
          action: {
            url: '/',
            target: 'blank'
          },
          data: {
            title: 'SERVER DRIVEN UI.'
          },
          attributes: {
            className: 'fw500 logo',
            styles: {
              textDecoration: "none",
              color: 'black'
            }
          },
        },
        rightSection: {
          type: 'menuItems',
          attributes: {
            styles: {
              display: 'flex', 
            }
          },
          data: {
            type: 'menuItems',
            menuItems: [
              {
                type: 'anchorLink',
                action: {
                  url: '/',
                  target: 'blank'
                },
                data: {
                  title: 'About Us.'
                },
                attributes: {
                  styles: {
                    "fontSize": "14px",
                    "cursor": "pointer",
                    "marginLeft": "25px",
                    textDecoration: 'none'
                  }
                }
              },
              {
                type: 'anchorLink',
                action: {
                  url: '/',
                  target: 'blank'
                },
                data: {
                  title: 'Contact Us'
                },
                attributes: {
                  styles: {
                    "fontSize": "14px",
                    "cursor": "pointer",
                    "marginLeft": "25px",
                    textDecoration: 'none'
                  }
                }
              },
            ]
          }
        }
      },
    },
    {
      type: "slider",
      attributes: {
        "styles": {
          "width": "100%",
          "height": "90vh",
          "display": "flex",
          "position": "relative",
          "overflow": "hidden"
        }
      },
      data: {
        type: 'slides',
        attributes: {
          styles: {
            height: '100%',
            display: 'flex',
            transition: 'all 1.5s ease',
          }
        },
        slides: [
          {
            type: 'slideData',
            attributes: {
              styles: {
                backgroundColor: '#f5fafd',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
              }
            },
            data: [
              {
                type: 'sections',
                leftSection: {
                  attributes: {
                    styles: {
                      height: '100%',
                      flex: '40%',                 
                    }
                  },
                  data: [{
                    type: 'img',
                    title: 'slider1 image',
                    attributes: {
                      src: 'https://64dbb5514159660c2a18f467--unrivaled-kleicha-7011bc.netlify.app/static/media/slider1.9fe9796c5fe23e4daebb.jpg',
                      alt: 'slide1',
                      styles: {
                        height: '100%',
                        width: '100%',
                      }
                    }
                  }],
                  
                },
                rightSection: {
                  data: [
                    {
                      type: 'title',
                      title: 'AUTUMN COLLECTION',
                      attributes: {
                        styles: {
                          "fontSize": "70px",
                        }
                      }
                    },
                    {
                      type: 'subTitle',
                      title: "Don't compromise on style! Get flat 30% off for new arrivals.",
                      attributes: {
                        styles: {
                          margin: '50px 0px',
                          fontSize: '20px',
                          fontWeight: '500',
                          letterSpacing: '3px'
                        }
                      }
                    },
                  ],
                  attributes: {
                    styles: {
                      flex: '60%',
                      padding: '50px'
                    }
                  }
                }
              },
            ]
          },
          {
            type: 'slideData',
            attributes: {
              styles: {
                backgroundColor: '#f5fafd',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
              }
            },
            data: [
              {
                type: 'sections',
                leftSection: {
                  attributes: {
                    styles: {
                      height: '100%',
                      flex: '40%',                 
                    }
                  },
                  data: [{
                    type: 'img',
                    title: 'slider2 image',
                    attributes: {
                      src: 'https://64dbb5514159660c2a18f467--unrivaled-kleicha-7011bc.netlify.app/static/media/slider2.8cf9f967386469bbe3b7.jpg',
                      alt: 'slide2',
                      styles: {
                        height: '100%',
                        width: '100%',
                      }
                    }
                  }],
                  
                },
                rightSection: {
                  data: [
                    {
                      type: 'title',
                      title: 'LOUNGEWEAR LOVE',
                      attributes: {
                        src: '...',
                        alt: 'cart',
                        styles: {
                          "fontSize": "70px",
                        }
                      }
                    },
                    {
                      type: 'subTitle',
                      title: "Don't compromise on style! Get flat 30% off for new arrivals.",
                      attributes: {
                        styles: {
                          margin: '50px 0px',
                          fontSize: '20px',
                          fontWeight: '500',
                          letterSpacing: '3px'
                        }
                      }
                    },
                  ],
                  attributes: {
                    styles: {
                      flex: '60%',
                      padding: '50px'
                    }
                  }
                }
              },
            ]
          },
          {
            type: 'slideData',
            attributes: {
              styles: {
                backgroundColor: '#f5fafd',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
              }
            },
            data: [
              {
                type: 'sections',
                leftSection: {
                  attributes: {
                    styles: {
                      height: '100%',
                      flex: '40%',                 
                    }
                  },
                  data: [{
                    type: 'img',
                    title: 'slider3 image',
                    attributes: {
                      src: 'https://64dbb5514159660c2a18f467--unrivaled-kleicha-7011bc.netlify.app/static/media/slider3.f2bf953ed5852be24be8.jpg',
                      alt: 'slide3',
                      styles: {
                        height: '100%',
                        width: '100%',
                      }
                    }
                  }],
                  
                },
                rightSection: {
                  data: [
                    {
                      type: 'title',
                      title: 'SUMMER SALE',
                      action: {
                        url: '/cart'
                      },
                      attributes: {
                        src: '...',
                        alt: 'cart',
                        styles: {
                          "fontSize": "70px",
                        }
                      }
                    },
                    {
                      type: 'subTitle',
                      title: "Don't compromise on style! Get flat 30% off for new arrivals.",
                      attributes: {
                        styles: {
                          margin: '50px 0px',
                          fontSize: '20px',
                          fontWeight: '500',
                          letterSpacing: '3px'
                        }
                      }
                    },
                  ],
                  attributes: {
                    styles: {
                      flex: '60%',
                      padding: '50px'
                    }
                  }
                }
              },
            ]
          },
        ]
      }
    }
    // Add more widget types as needed
  ],
}


app.get('/landingPage', (req, res) => {
  res.json(schema);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
