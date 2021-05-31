import './index.css'
//import css from './index.css'
//const theme = require('./index.css')
const $table = document.getElementById('table')
const $data = []
const score = document.getElementById('score')
/*
    1. table을 만들어준다.
*/

function initTable() {
    let fragment = document.createDocumentFragment()
    ;[0, 0, 0, 0].forEach(() => {
        let tr = document.createElement('tr')
        let row = []
        $data.push(row)
        ;[0, 0, 0, 0].forEach(() => {
            row.push(0)
            let td = document.createElement('td')
            tr.appendChild(td)
        })
        fragment.appendChild(tr)
    })
    $table.appendChild(fragment)
}

function draw() {
    $data.forEach((datum, i) => {
        datum.forEach((da, j) => {
            if (da > 0) {
                $table.children[i].children[j].textContent = da
                $table.children[i].children[j].setAttribute('class', `color-${da}`)
            } else {
                $table.children[i].children[j].textContent = ''
                $table.children[i].children[j].setAttribute('class', `color-0`)
            }
        })
    })
}

function batchPuzzle() {
    const candidate = []
    $data.forEach((datum, i) => {
        datum.forEach((da, j) => {
            if ($data[i][j] === 0) candidate.push([j, i])
        })
    })

    if (candidate.length === 0) {
        alert('안됨')
    }
    const randomCoord = candidate[Math.floor(Math.random() * candidate.length)]
    $data[randomCoord[1]][randomCoord[0]] = 2
}
window.addEventListener('keyup', (e) => {
    score.innerText = parseInt(score.innerText) + 1
    if (e.key === 'ArrowRight') {
        move(0)
    } else if (e.key === 'ArrowDown') {
        move(1)
    } else if (e.key === 'ArrowLeft') {
        move(2)
    } else if (e.key === 'ArrowUp') {
        move(3)
    } else {
        score.innerText = parseInt(score.innerText) - 1
    }
})

function move(direction) {
    switch (direction) {
        case 0:
            $data.forEach((datum, i) => {
                let moved = []
                let base = 0
                datum.forEach((da, j) => {
                    if ($data[i][j] > 0) {
                        moved.push($data[i][j])
                        $data[i][j] = 0
                    }
                })
                base = 4 - moved.length
                moved.forEach((value) => {
                    $data[i][base++] = value
                })
                moved = []
                base = 3
                for (let k = 2; k >= 0; ) {
                    let pre = $data[i][k + 1]
                    let cur = $data[i][k]

                    if (pre === cur && pre > 0) {
                        moved.push(pre * 2)
                        k -= 2
                    } else {
                        moved.push(pre)
                        if (k === 0) {
                            moved.push(cur)
                            break
                        }
                        k -= 1
                    }
                }
                for (let k = 0; k < 4; k++) {
                    if (moved[k]) {
                        $data[i][base--] = moved[k]
                    } else {
                        $data[i][base--] = 0
                    }
                }
            })
            break
        case 1:
            $data.forEach((datum, j) => {
                let moved = []
                let base = 0
                datum.forEach((da, i) => {
                    if ($data[i][j] > 0) {
                        moved.push($data[i][j])
                        $data[i][j] = 0
                    }
                })
                base = 4 - moved.length
                moved.forEach((value) => {
                    $data[base++][j] = value
                })
                moved = []
                base = 3
                for (let k = 2; k >= 0; ) {
                    let pre = $data[k + 1][j]
                    let cur = $data[k][j]

                    if (pre === cur && pre > 0) {
                        moved.push(pre * 2)
                        k -= 2
                    } else {
                        moved.push(pre)
                        if (k === 0) {
                            moved.push(cur)
                            break
                        }
                        k -= 1
                    }
                }
                for (let k = 0; k < 4; k++) {
                    if (moved[k]) {
                        $data[base--][j] = moved[k]
                    } else {
                        $data[base--][j] = 0
                    }
                }
            })
            break
        case 2:
            $data.forEach((datum, i) => {
                let moved = []
                let base = 0
                datum.forEach((da, j) => {
                    if ($data[i][j] > 0) {
                        moved.push($data[i][j])
                        $data[i][j] = 0
                    }
                })
                base = 0
                moved.forEach((value) => {
                    $data[i][base++] = value
                })
                moved = []
                base = 0
                for (let k = 1; k < 4; ) {
                    let pre = $data[i][k - 1]
                    let cur = $data[i][k]

                    if (pre === cur && pre > 0) {
                        moved.push(pre * 2)
                        k += 2
                    } else {
                        moved.push(pre)
                        if (k === 3) {
                            moved.push(cur)
                            break
                        }
                        k += 1
                    }
                }
                for (let k = 0; k < 4; k++) {
                    if (moved[k]) {
                        $data[i][base++] = moved[k]
                    } else {
                        $data[i][base++] = 0
                    }
                }
            })
            break
        case 3:
            $data.forEach((datum, j) => {
                let moved = []
                let base = 0
                datum.forEach((da, i) => {
                    if ($data[i][j] > 0) {
                        moved.push($data[i][j])
                        $data[i][j] = 0
                    }
                })
                base = 0
                moved.forEach((value) => {
                    $data[base++][j] = value
                })
                moved = []
                base = 0
                for (let k = 1; k < 4; ) {
                    let pre = $data[k - 1][j]
                    let cur = $data[k][j]

                    if (pre === cur && pre > 0) {
                        moved.push(pre * 2)
                        k += 2
                    } else {
                        moved.push(pre)
                        if (k === 3) {
                            moved.push(cur)
                            break
                        }
                        k += 1
                    }
                }
                for (let k = 0; k < 4; k++) {
                    if (moved[k]) {
                        $data[base++][j] = moved[k]
                    } else {
                        $data[base++][j] = 0
                    }
                }
            })
            break
    }

    if ($data.flat().includes(2048)) {
        draw()
        setTimeout(() => {
            alert('승리')
        }, 0)
    } else if (!$data.flat().includes(0)) {
        alert('패배')
    } else {
        batchPuzzle()
        batchPuzzle()
        draw()
    }
}

initTable()
batchPuzzle()
batchPuzzle()
draw()
