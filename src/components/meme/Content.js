import React from "react"
import styles from "../../Styling/Meme.module.css"

// Styling will change according user event
const topTextStyle = {
    fontSize: "30",
    position: "absolute",
    top: "37%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textShadow: "1px 1px black",
    fontFamily: "Algerian",
}
const bottomTextStyle = {
    fontSize: "30",
    position: "absolute",
    top: "75%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textShadow: "1px 1px black",
    fontFamily: "Algerian",
}
// Random colors
const colors = [
    "black", "blueviolet", "brown", "chartreuse", "darkblue", "darkgrey", "darkorang",
    "aqua", "blue", "crimson", "darkkhaki", "darkturquoise", "deeppink", "gold", "green"]

// Random font-family
const fontFamily = [
    "Brush Script MT",
    "Rockwell",
    "Consolas",
    "Algerian",
    "Berlin Sans FB Demi",
    "Castellar",
    "Elephant",
    "Matura MT Script Capitals"]

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/1bh3.jpg",
            allMemeImgs: [],
            topTextStyle: topTextStyle,
            bottomTextStyle: bottomTextStyle
        }
    }
    // Fetching image from online API
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => {
                const { memes } = data.data
                this.setState({ allMemeImgs: memes }
                )
            })
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    // Random image for meme.
    changeImage = (e) => {
        e.preventDefault()
        const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomMeme = this.state.allMemeImgs[randomNumber].url
        this.setState({
            randomImg: randomMeme
        })
    }
    // Random color for font.
    handleColorChange = () => {
        const color = colors[Math.floor(Math.random() * colors.length)]
        this.setState(prevState => {
            return {
                topTextStyle: { ...prevState.topTextStyle, color: color },
                bottomTextStyle: { ...prevState.bottomTextStyle, color: color }
            }
        })
    }
    // Random font-family.
    handleFontFamily = () => {
        const font = fontFamily[Math.floor(Math.random() * fontFamily.length)]
        this.setState(prevState => {
            return {
                topTextStyle: { ...prevState.topTextStyle, fontFamily: font },
                bottomTextStyle: { ...prevState.bottomTextStyle, fontFamily: font }
            }
        })
    }
    handleFontIncrease = () => {
        this.setState(prevState => {
            return {
                topTextStyle: {
                    ...prevState.topTextStyle,
                    fontSize: parseInt(prevState.topTextStyle.fontSize) + 1
                },
                bottomTextStyle: {
                    ...prevState.bottomTextStyle,
                    fontSize: parseInt(prevState.bottomTextStyle.fontSize) + 1
                }
            }
        })
    }
    handleFontDecrease = () => {
        this.setState(prevState => {
            return {
                topTextStyle: {
                    ...prevState.topTextStyle,
                    fontSize: parseInt(prevState.topTextStyle.fontSize) - 1
                },
                bottomTextStyle: {
                    ...prevState.bottomTextStyle,
                    fontSize: parseInt(prevState.bottomTextStyle.fontSize) - 1
                }
            }
        })
    }
    render() {
        return (
            <center>
                <form onSubmit={this.changeImage}>
                    <input
                        type="text"
                        name="topText"
                        onChange={this.handleChange}
                        placeholder="Enter topText"
                        value={this.state.topText}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        onChange={this.handleChange}
                        placeholder="Enter bottomText"
                        value={this.state.bottomText}
                    />
                    <button className={styles.button}>Generat</button>
                </form>
                <div>
                    <img className={styles.MemeImage} src={this.state.randomImg} alt="MemeImage" />
                    <h2 style={this.state.topTextStyle}>{this.state.topText}</h2>
                    <h2 style={this.state.bottomTextStyle}>{this.state.bottomText}</h2>
                </div>
                <div>
                    <p className={styles.fontHeading}>Change Font Style</p>
                    <button onClick={this.handleColorChange}>Color</button>
                    <button onClick={this.handleFontIncrease}>Increase Size</button>
                    <button onClick={this.handleFontDecrease}>Decrease Size</button>
                    <button onClick={this.handleFontFamily}>Font Family</button>
                </div>
            </center>
        )
    }
}

export default Content