import React, { Component } from "react"; // allow to create react components
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardHeader, } from 'reactstrap';
import { DISHES } from "../shared/dishes";

class DishDetail extends Component {

    // eslint-disable-next-line no-useless-constructor
        constructor(props) {
        super(props);
        this.renderDish = this.renderDish.bind(this);
        this.renderComments = this.renderComments.bind(this);
    }

    renderDish(dish) {
        // show ra thong tin dish đã được click ( image + name + description)
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else return <div></div>;
    }

    renderComments(comments) {
        if (comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {
                            comments.map(({id, rating, comment, author, date}) => (
                                <li key={id}>
                                    <p>{comment}</p>
                                    <p>{`-- ${author}, ${new Intl.DateTimeFormat("en-US", {year: "numeric", month: "short", day: "2-digit",}).format(new Date(Date.parse(date)))}`}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
        else return <div></div>
    }

    render() {
        return (
            <div class="container">
                <div className="row">
                    <div className="col-sm-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-sm-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish?.comments)}
                    </div>
                </div>
            </div>
        )
    }
}

export default DishDetail;
