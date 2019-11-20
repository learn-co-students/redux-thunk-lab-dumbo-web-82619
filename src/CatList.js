import React from 'react'

export default class CatList extends React.Component{

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.catPics.map(catPic => <img key={catPic.id} src={catPic.url} alt={`${catPic.id}-pic`}/>)}
            </div>
        )
    }
}