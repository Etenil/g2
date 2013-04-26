var colors = {
    stash: '#c2a66a',
	workspace: '#1ECCE3',
    index: '#79E329',
	local_repo: '#cd0074',
    remote_repo:'#63819c'
}


var upColor = colors.workspace.darken(10).saturate(-30);
var dnColor = colors.workspace.darken(0).saturate(-30);
var statusColor = '#846C6C';

var c;

var css = {
    'html,body': {
        margin: 0,
        padding: 0
    },
    'a,a:link,a:visited': {
        color: colors.local_repo,
        textDecoration: 'none'
    },
    'a:hover': {
        color: colors.local_repo.darken(10),
        textDecoration: 'underline'
    },
    '#hd': {
        '*': {
          margin: 0,
          padding: 0
        },
        h1: {
            font: '50px ImpactLabelRegular, ImpactLabelReversedRegular, verdana'
        },
        h2: {
            paddingTop: 3,
            textAlign: 'right',
            color: colors.local_repo,
            font: 'normal 25px ImpactLabelRegular,ImpactLabelReversedRegular,  verdana'
        },
        h6: {
            textAlign: 'right',
            color: colors.local_repo.saturate(-60).lighten(10),
            font: '15px courier, monospaced'
        }
    },
	'#hd2': {
		'*': {
			margin: "auto",
			padding: 0

		},
		p: {
			font: 'normal 22px ImpactLabelReversedRegular, ImpactLabelReversedRegular, verdana',
			textAlign: 'center',
			color: colors.local_repo,
			paddingBottom: 8
		}
	},
    '#diagram': {
        marginTop: 20,
        position: 'relative',
        height: '820px',
        padding: '1px 0'
    },
    '.loc': {
        position: 'relative',
        height: '100%',
        cursor: 'pointer',
        has: boxShadow([3,3], 2, '#ccc'),
        '.bar': {
            position: 'absolute',
            left: '45%',
            top: 50,
            border: '1px dashed white',
            'border-top': 'none',
            width: 10,
            height: '750px'
        },
        'label': {
            position: 'absolute',
            top: 0,
            width: '100%',
            'text-align': 'center',
            padding: '20px 0',
            font: '30px ImpactLabelReversedRegular, ImpactLabelRegular, verdana',
            color: '#333'
        },
        'p': {
            bottom: 0,
            position: 'absolute',
            padding: '0 20px',
            font: '15px courier, monospaced',
            color: 'white',
            visibility: 'hidden'
        },
        '&.hovered': {
            has: boxShadow([3,3], 6, '#777'),
            p: {
                visibility: 'visible'
            }

        },
        '&.current': {
            has: boxShadow([3,3], 6, '#777'),
            p: {
                visibility: 'visible'
            },
            'label': {
                color: 'white'
            }
        },
        '&:hover,&.current': {
        }

    },
    'body.index #commands': {
        'div.up': {
            backgroundColor: c = colors.index.darken(30).saturate(0),
            borderColor: c,
            '> .arrow': {
                'border-left-color': c
            },
            '&:hover': {
                'background-color': c.darken(5),
                '> .arrow': {
                    'border-left-color': c.darken(5)
                }
            }
        },
        'div.dn': {
            backgroundColor: c = colors.index.darken(10).saturate(-10),
            borderColor: c,
            '> .arrow': {
                'border-right-color': c
            },
            '&:hover': {
                'background-color': c.darken(5),
                '> .arrow': {
                    'border-right-color': c.darken(5)
                }
            }
        }
    },
    'body.local_repo #commands': {
        'div.up': {
            backgroundColor: c = colors.local_repo.darken(10).saturate(0),
            borderColor: c,
            '> .arrow': {
                'border-left-color': c
            },
            '&:hover': {
                'background-color': c.darken(5),
                '> .arrow': {
                    'border-left-color': c.darken(5)
                }
            }
        },
        'div.dn': {
            backgroundColor: c = colors.local_repo.darken(-10).saturate(-10),
            borderColor: c,
            '> .arrow': {
                'border-right-color': c
            },
            '&:hover': {
                'background-color': c.darken(5),
                '> .arrow': {
                    'border-right-color': c.darken(5)
                }
            }
        }
    },
    '#commands': {
        position: 'absolute',
        top: 90,
        left: 0,
        width: '100%',
        font: '15px courier, monospaced',
        height: 0,
        '> div': {
            color: '#dddddd',
            marginBottom: 2,
            'float': 'left',
            clear: 'left',
            padding: '2px 5px',
            lineHeight: 16,
            position: 'relative',
            opacity: 0.3,
            display: 'none',
            '&:hover': {
                cursor: 'pointer',
                has: boxShadow([1,1], 5, '#992667')
            },
            '&.up': {
                'background-color': upColor,
                'border-color': upColor.lighten(20),
                color: upColor.lighten(50),
                '> .arrow': {
                    width: 0,
                    height: 0,
                    border: '9px solid transparent',
                    'border-left-color': upColor,
                    position: 'absolute',
                    right: '-18px',
                    top: 0
                },
                '&:hover': {
                    'background-color': upColor.darken(5),
                    '> .arrow': {
                        'border-left-color': upColor.darken(5),
                        'border-left-width': 11,
                        right: '-20px'
                    }
                }
            },
            '&.dn': {
                'background-color': dnColor,
                'border-color': dnColor.lighten(20),
                color: dnColor.lighten(50),
                '> .arrow': {
                    width: 0,
                    height: 0,
                    border: '9px solid transparent',
                    'border-right-color': dnColor,
                    position: 'absolute',
                    left: '-18px',
                    top: 0
                },
                '&:hover': {
                    'background-color': dnColor.darken(5),
                    '> .arrow': {
                        'border-right-width': 11,
                        'border-right-color': dnColor.darken(5),
                        left: '-20px'
                    }
                }
            },
            '&.status': {
                'border-color': statusColor.lighten(20),
                'background-color': statusColor,
                color: statusColor.lighten(50),
                '&:hover': {
                    'background-color': statusColor.darken(5)
                }
            }
        }
    },
    '#info': {
        height: 60,
        padding: '10px 0',
        marginTop: 10,
        font: '15px/20px courier, monospaced',
        '.cmd':{
            color: 'black',
            display: 'block',
            textAlign: 'right',
            marginLeft: 20,
            textDecoration: 'underline'
        },
        '.doc':{
            display: 'block',
            marginLeft: 20,
            color: 'black'.lighten(30)
        }
    },
    '#index .bar, #remote_repo .bar, #local_repo .bar': {
      top: 85,
	  height: '710px'
    }
};

$(function() {
    $.each(['stash','workspace','index','local_repo','remote_repo'], function(index, value) {
        var width = $('#' + value).innerWidth();
        $('#' + value).css('width', width - 2);

        css['#' + value] = {
            border: '1px dotted transparent',// + colors[value],
            color: colors[value],
            backgroundColor: colors[value].saturate(-50).lighten(20)
        };
        css['#' + value + ' .bar'] = { borderColor: colors[value].darken(20)};
        css['body.' + value + ' #' + value] = {
            color: 'white',
            backgroundColor: colors[value].lighten(0)
        };
        css['body.' + value + ' #commands > div.' + value] = {
            display: 'block',
            opacity: 1
        }
    });

    Csster.style(css);

});

