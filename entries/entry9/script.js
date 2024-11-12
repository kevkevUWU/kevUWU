class HuaDong {
    constructor(imgs, slider, sliderIndex = 0, animDur = 1, rowsNo = 5, columnsNo = 5) {
        this.imgs = imgs
        this.slider = slider.querySelector(".imgcon")
        this.jishu = slider.querySelector(".jishu")
        this.sliderIndex = sliderIndex
        this.animDur = animDur
        this.rowsNo = rowsNo
        this.columnsNo = columnsNo


    }

    st() {
        this.slider.innerHTML = 
        `<div class="imgrow">
                <div class="slide">
                ${`<div class="imggrid"></div>`.repeat(this.columnsNo)}
            </div></div>`.repeat(this.rowsNo)


        this.sliderRows = this.slider.querySelectorAll(".imgrow")
        this.evenSliderRow = this.slider.querySelectorAll(".imgrow:nth-child(even)")
        this.oddSliderRow = this.slider.querySelectorAll(".imgrow:nth-child(odd)")
        this.jishu.innerHTML = `<div class="slide-dot"></div>`.repeat(this.imgs.length)

        this.slideSync()
        this.increaseIndex()
    }

    increaseIndex() {
        this.sliderIndex = this.sliderIndex < this.imgs.length - 1 ? this.sliderIndex + 1 : 0
    }
    decreaseIndex() {
        this.sliderIndex = this.sliderIndex > 0 ? this.sliderIndex - 1 : this.imgs.length - 1

    }

    slideSync() {
        document.body.style.background = "url(" + this.imgs[this.sliderIndex] + ")"

        this.slideDots = document.querySelectorAll(".slide-dot")
        this.slideDots.forEach(i => i.style.background = "white");
        for (let i = 0; i < this.sliderIndex + 1; i++) this.slideDots[i].style.background = "#3a86ff"
    }



    jia(i, type, index) {

        var sliderSlide = document.createElement("div")
        sliderSlide.classList.add("slide")
        sliderSlide.classList.add("slide-new")


        for (let k = 0; k < this.rowsNo; k++) {
            var sliderCell = document.createElement("div")
            sliderCell.classList.add("imggrid")

            sliderCell.style.backgroundImage = "url(" + this.imgs[index] + ")"
            sliderSlide.appendChild(sliderCell)
        }
        type == "start" ? i.insertBefore(sliderSlide, i.firstChild) : i.appendChild(sliderSlide)
    }


    nextSlide() {
        for (let i of this.evenSliderRow) {
            this.jia(i, "start", this.sliderIndex, false)
            var slides = i.getElementsByClassName("slide")
            gsap.fromTo(slides, { x: "-100%" }, {
                x: "-0%",
                duration: this.animDur,
                onComplete() {
                    console.log(slides)

                    i.querySelectorAll(".slide").forEach(elem => elem.style.transform = 'translateX(0)')
                    i.querySelectorAll(".slide:not(.slide-new)").forEach(elem => elem.remove())
                    i.querySelectorAll(".slide-new").forEach(elem => elem.classList.remove('slide-new'))
                }
            })
        }

        for (let i of this.oddSliderRow) {
            this.jia(i, "end", this.sliderIndex, true)
            var slides = i.getElementsByClassName("slide")
            slides[0].style.transform = "translate3d(0%,0%,0%)"

            gsap.fromTo(slides, { x: "0%" }, {
                x: "-100%",
                duration: this.animDur,
                onComplete() {
 

                    i.querySelectorAll(".slide").forEach(elem => elem.style.transform = 'translateX(0)')
                    i.querySelectorAll(".slide:not(.slide-new)").forEach(elem => elem.remove())
                    i.querySelectorAll(".slide-new").forEach(elem => elem.classList.remove('slide-new'))
                }
            })
        }

        this.slideSync()
        this.increaseIndex()
    }

    prevSlide() {
        for (let i of this.evenSliderRow) {
            this.jia(i, "end", this.sliderIndex)
            var slides = i.getElementsByClassName("slide")
            gsap.fromTo(slides, { x: "0%" }, {
                x: "-100%",
                duration: this.animDur,
                onComplete() {
                    i.querySelectorAll(".slide").forEach(elem => elem.style.transform = 'translateX(0)')

                    i.querySelectorAll(".slide:not(.slide-new)").forEach(elem => elem.remove())
                    i.querySelectorAll(".slide-new").forEach(elem => elem.classList.remove('slide-new'))
                }
            })
        }

        for (let i of this.oddSliderRow) {
            this.jia(i, "start", this.sliderIndex)
            var slides = i.getElementsByClassName("slide")

            gsap.fromTo(slides, { x: "-100%" }, {
                x: "0%",
                duration: this.animDur,
                onComplete() {

                    i.querySelectorAll(".slide:not(.slide-new)").forEach(elem => elem.remove())
                    i.querySelectorAll(".slide-new").forEach(elem => elem.classList.remove('slide-new'))
                }
            })
        }

        this.decreaseIndex()
        this.slideSync()
    }
}

var slider = new HuaDong(
    [
        "https://www.google.com/imgres?q=Tartine&imgurl=https%3A%2F%2Fthenewbaguette.com%2Fwp-content%2Fuploads%2F2021%2F05%2Fmushroom-tartine-30.jpg&imgrefurl=https%3A%2F%2Fthenewbaguette.com%2Fmushroom-tartine%2F&docid=uSjXPrsu6bU9jM&tbnid=fdYBTvoiyNtPYM&vet=12ahUKEwi-_qKo9teJAxWtK1kFHYNZNioQM3oECFMQAA..i&w=1300&h=868&hcb=2&ved=2ahUKEwi-_qKo9teJAxWtK1kFHYNZNioQM3oECFMQAA", 
        "https://californiaavocado.com/wp-content/uploads/2020/07/Avocado-Tartine-Green-Garlic-Roasted-Poblano", 
"https://www.saucedkitchen.com/wp-content/uploads/2020/12/Breakfast-Tartines-scaled.jpg",
"https://studio5.ksl.com/wp-content/uploads/2019/01/26336369-740x494.jpg", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2hXsliPwCBfh5t8q6Yq9sUZXkwaAk18tYKw&s", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzV7wvLd3CJHeo6Ngqhpnw7t2s-QtDCaiZKQ&s", 
],
    document.querySelector(".wrapper")
)
slider.st()

document.querySelector(".wrapper .btnGroup button:nth-child(1)").onclick = () => slider.prevSlide()
document.querySelector(".wrapper .btnGroup button:nth-child(2)").onclick = () => slider.nextSlide()