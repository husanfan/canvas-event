import React from 'react';
import './FileDiff.css';

class FileDiff extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            compareR: {
                "diffWords": [
                    {
                        "leftWords": [
                            {
                                "articleIndex": 13,
                                "h": 28,
                                "length": 1,
                                "page": 0,
                                "pageIndex": 13,
                                "w": 11,
                                "word": "X",
                                "x": 207,
                                "y": 89
                            }
                        ],
                        "rightWords": [
                            {
                                "articleIndex": 13,
                                "h": 19,
                                "length": 1,
                                "page": 0,
                                "pageIndex": 13,
                                "w": 9,
                                "word": "Y",
                                "x": 158,
                                "y": 164
                            }
                        ],
                        "type": "CHANGE"
                    },
                    {
                        "leftWords": [

                        ],
                        "rightWords": [
                            {
                                "articleIndex": 146,
                                "h": 21,
                                "length": 1,
                                "page": 0,
                                "pageIndex": 146,
                                "w": 20,
                                "word": "这",
                                "x": 871,
                                "y": 488
                            }
                        ],
                        "type": "INSERT"
                    },
                    {
                        "leftWords": [
                            {
                                "articleIndex": 365,
                                "h": 26,
                                "length": 1,
                                "page": 0,
                                "pageIndex": 365,
                                "w": 27,
                                "word": "退",
                                "x": 738,
                                "y": 1116
                            },
                            {
                                "articleIndex": 366,
                                "h": 26,
                                "length": 1,
                                "page": 0,
                                "pageIndex": 366,
                                "w": 27,
                                "word": "款",
                                "x": 771,
                                "y": 1116
                            },
                            {
                                "articleIndex": 367,
                                "h": 26,
                                "length": 1,
                                "page": 0,
                                "pageIndex": 367,
                                "w": 9,
                                "word": "、",
                                "x": 803,
                                "y": 1116
                            }
                        ],
                        "rightWords": [

                        ],
                        "type": "DELETE"
                    },
                    {
                        "leftWords": [
                            {
                                "articleIndex": 471,
                                "h": 25,
                                "length": 1,
                                "page": 0,
                                "pageIndex": 471,
                                "w": 28,
                                "word": "行",
                                "x": 949,
                                "y": 1321
                            }
                        ],
                        "rightWords": [
                            {
                                "articleIndex": 469,
                                "h": 22,
                                "length": 1,
                                "page": 0,
                                "pageIndex": 469,
                                "w": 20,
                                "word": "己",
                                "x": 638,
                                "y": 1092
                            }
                        ],
                        "type": "CHANGE"
                    },
                    {
                        "leftWords": [
                            {
                                "articleIndex": 483,
                                "h": 24,
                                "length": 1,
                                "page": 0,
                                "pageIndex": 483,
                                "w": 26,
                                "word": "张",
                                "x": 134,
                                "y": 1417
                            },
                            {
                                "articleIndex": 484,
                                "h": 24,
                                "length": 1,
                                "page": 0,
                                "pageIndex": 484,
                                "w": 30,
                                "word": "三",
                                "x": 165,
                                "y": 1418
                            }
                        ],
                        "rightWords": [
                            {
                                "articleIndex": 481,
                                "h": 20,
                                "length": 1,
                                "page": 0,
                                "pageIndex": 481,
                                "w": 20,
                                "word": "王",
                                "x": 17,
                                "y": 1123
                            },
                            {
                                "articleIndex": 482,
                                "h": 20,
                                "length": 1,
                                "page": 0,
                                "pageIndex": 482,
                                "w": 20,
                                "word": "五",
                                "x": 40,
                                "y": 1125
                            }
                        ],
                        "type": "CHANGE"
                    },
                    {
                        "leftWords": [
                            {
                                "articleIndex": 488,
                                "h": 22,
                                "length": 1,
                                "page": 0,
                                "pageIndex": 488,
                                "w": 14,
                                "word": "9",
                                "x": 732,
                                "y": 1420
                            }
                        ],
                        "rightWords": [
                            {
                                "articleIndex": 486,
                                "h": 19,
                                "length": 1,
                                "page": 0,
                                "pageIndex": 486,
                                "w": 10,
                                "word": "8",
                                "x": 469,
                                "y": 1156
                            }
                        ],
                        "type": "CHANGE"
                    },
                    {
                        "leftWords": [
                            {
                                "articleIndex": 499,
                                "h": 21,
                                "length": 1,
                                "page": 0,
                                "pageIndex": 499,
                                "w": 14,
                                "word": "A",
                                "x": 1011,
                                "y": 1463
                            }
                        ],
                        "rightWords": [

                        ],
                        "type": "DELETE"
                    }
                ],
                "leftDiffPages": [
                    {
                        "angle": 0,
                        "height": 1520,
                        "orgHeight": 1520,
                        "orgWidth": 1342,
                        "width": 1342
                    }
                ],
                "rightDiffPages": [
                    {
                        "angle": 0,
                        "height": 1280,
                        "orgHeight": 1280,
                        "orgWidth": 960,
                        "width": 960
                    }
                ]
            },
            preRects: [],
            curRects: [],
            preBorderList: []
        }
    }

    componentDidMount() {
        const { diffWords, leftDiffPages, rightDiffPages } = this.state.compareR;
        const elW = 502;
        const preRects = [];
        const curRects = [];
        diffWords.forEach((v, i) => {
            const p = v.leftWords;
            p.forEach(w => {
                const preFileWAH = [leftDiffPages[w.page].width, leftDiffPages[w.page].height];
                preRects.push(this.drawRect(w.x, w.y, w.w, w.h, w.word, i, preFileWAH, elW, v.type));
            })
            const c = v.rightWords;
            c.forEach(w => {
                const curFileWAH = [rightDiffPages[w.page].width, rightDiffPages[w.page].height];
                curRects.push(this.drawRect(w.x, w.y, w.w, w.h, w.word, i, curFileWAH, elW, v.type));
            })
        })
        this.setState({
            preRects,
            curRects
        })

        // canvas

        this.p = document.getElementById('preCanvas');
        this.c = document.getElementById('curCanvas');

        this.pC = this.p.getContext('2d');
        this.cC = this.c.getContext('2d');

        preRects.forEach(v => {
            this.drawCanvasRect(this.pC, v.color, [v.x, v.y, v.w, v.h]);
        })

        curRects.forEach(v => {
            this.drawCanvasRect(this.cC, v.color, [v.x, v.y, v.w, v.h]);
        })
    }

    drawRect(x, y, w, h, word, i, fileWAH, elW, t) {
        const r = elW / fileWAH[0];
        return {
            x: x * r,
            y: y * r,
            w: w * r,
            h: h * r,
            word: word,
            i: i,
            color: t === 'INSERT' ? 'green' : t === 'DELETE' ? 'red' : 'orange',
            b: false
        }
    }

    drawCanvasRect(c, color, i) {
        c.beginPath();
        c.fillStyle = color;
        c.fillRect(...i);
    }

    drawCanvasBorder(c, color, i) {
        c.beginPath();
        c.strokeStyle = color;
        c.strokeRect(...i);
    }

    mouseOver(r, e) {
        const { i } = r;
        const preRects = this.state.preRects.map(v => {
            if (v.i === i) {
                v.b = true;
            }
            return v;
        })
        const curRects = this.state.curRects.map(v => {
            if (v.i === i) {
                v.b = true;
            }
            return v;
        })
        this.setState({
            preRects,
            curRects
        })
    }

    mouseOut() {
        const preRects = this.state.preRects.map(v => {
            v.b = false;
            return v;
        })
        const curRects = this.state.curRects.map(v => {
            v.b = false;
            return v;
        })
        this.setState({
            preRects,
            curRects
        })
    }

    mouseMove(e) {
        e.persist();
        clearTimeout(this.mouseMoveTimeout);
        this.mouseMoveTimeout = null;
        this.mouseMoveTimeout = setTimeout(() => {
            const preBorderList = this.state.preBorderList;
            if (preBorderList && preBorderList.length > 0) {
                // preBorderList.forEach(v => {
                //     this.drawCanvasBorder(v.c, '#fff', v.p);
                // })
                this.p.width = this.p.width;
                this.c.width = this.c.width;

                this.state.preRects.forEach(v => {
                    this.drawCanvasRect(this.pC, v.color, [v.x, v.y, v.w, v.h]);
                })

                this.state.curRects.forEach(v => {
                    this.drawCanvasRect(this.cC, v.color, [v.x, v.y, v.w, v.h]);
                })
            }
            const env = e;
            const x = env.pageX - env.target.offsetLeft;
            const y = env.pageY - env.target.offsetTop;
            const rects = this.state.preRects.concat(this.state.curRects);
            const rst = rects.find(v => {
                return this.isShowBorder(
                    { x: v.x, y: v.y },
                    { x: v.x + v.w, y: v.y },
                    { x: v.x + v.w, y: v.y + v.h },
                    { x: v.x, y: v.y + v.h },
                    x,
                    y
                )
            })
            const curBorderList = [];
            if (rst && rst.i) {
                this.state.preRects.forEach(v => {
                    if (v.i === rst.i) {
                        const p = [v.x, v.y, v.w, v.h];
                        this.drawCanvasBorder(this.pC, 'blue', p);
                        curBorderList.push({
                            c: this.pC,
                            p,
                            color: v.color
                        })
                    }
                })
                this.state.curRects.forEach(v => {
                    if (v.i === rst.i) {
                        const p = [v.x, v.y, v.w, v.h];
                        this.drawCanvasBorder(this.cC, 'blue', p);
                        curBorderList.push({
                            c: this.cC,
                            p,
                            color: v.color
                        })
                    }
                })
                this.setState({
                    preBorderList: curBorderList
                })
            }
        }, 200);
    }

    isShowBorder(A, B, C, D, x, y) {
        const a = (B.x - A.x) * (y - A.y) - (B.y - A.y) * (x - A.x);
        const b = (C.x - B.x) * (y - B.y) - (C.y - B.y) * (x - B.x);
        const c = (D.x - C.x) * (y - C.y) - (D.y - C.y) * (x - C.x);
        const d = (A.x - D.x) * (y - D.y) - (A.y - D.y) * (x - D.x);
        if ((a > 0 && b > 0 && c > 0 && d > 0) || (a < 0 && b < 0 && c < 0 && d < 0)) {
            return true;
        }

    }

    render() {
        return (
            <div>
                <div className="flex_box">
                    <div className="box">
                        {this.state.preRects.map((v, i) => {
                            return (
                                <div
                                    key={i}
                                    style={{
                                        left: v.x + 'px',
                                        top: v.y + 'px',
                                        width: v.w + 'px',
                                        height: v.h + 'px',
                                        backgroundColor: v.color,
                                        position: 'absolute',
                                        fontSize: '12px',
                                        border: v.b ? '1px solid blue' : 'none'
                                    }}
                                    onMouseOver={this.mouseOver.bind(this, v)}
                                    onMouseOut={this.mouseOut.bind(this)}
                                >
                                    {v.word}
                                </div>
                            )
                        })}
                    </div>
                    <div className="box">
                        {this.state.curRects.map((v, i) => {
                            return (
                                <div
                                    key={i}
                                    style={{
                                        left: v.x + 'px',
                                        top: v.y + 'px',
                                        width: v.w + 'px',
                                        height: v.h + 'px',
                                        backgroundColor: v.color,
                                        position: 'absolute',
                                        fontSize: '12px',
                                        border: v.b ? '1px solid blue' : 'none'
                                    }}
                                    onMouseOver={this.mouseOver.bind(this, v)}
                                    onMouseOut={this.mouseOut.bind(this)}
                                >
                                    {v.word}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="flex_box">
                    <div className="canvas_box">
                        <canvas
                            id="preCanvas"
                            width="500"
                            height="800"
                            style={{ border: '1px solid orange' }}
                            onMouseMove={this.mouseMove.bind(this)}></canvas>
                    </div>
                    <div className="canvas_box right_canvas_box">
                        <canvas
                            id="curCanvas"
                            width="500"
                            height="800"
                            style={{ border: '1px solid orange' }}
                            onMouseMove={this.mouseMove.bind(this)}></canvas>
                    </div>
                </div>
            </div>
        )
    }
}

export default FileDiff