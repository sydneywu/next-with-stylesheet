import React from 'react';
import Slider from 'react-slick';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {Button, Modal, Icon, Form} from 'semantic-ui-react'
import {Component} from 'react'

class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
        this.inputdueDate = '';

        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDay: null,
            startDate: moment().format("DD-MM-YYYY"),
        };
    }

    handleDayClick(day, { selected }) {
        this.setState({
            selectedDay: this.state.startDate ? day : day,

        });
    }//new code

    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
		return(
			<div>
				<p> Hello this is test component </p>
                <div style={{width:'80%' ,textAlign: 'center', margin: '0 auto'}}>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
                </div>
                <br /> <br /> <br /> <br />
                <div style={{width:'80%' ,textAlign: 'center', margin: '0 auto'}}>
                <Form>
                    <Form.Field>
                        <label>Choose date</label>
                        <DatePicker
                            selectedDays={this.state.selectedDay}
                            onDayClick={this.handleDayClick}
                        />

                        <input
                            placeholder='Click date in calender'
                            ref={dueDate => {this.inputdueDate = dueDate}}
                            value={this.state.selectedDay? this.state.selectedDay.toLocaleDateString(): this.state.startDate} // keep old value
                        />
                    </Form.Field>
                </Form>
                </div>
			</div>
		)
	}
}

export default HomeContainer