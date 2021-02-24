import React from 'react';
import './Calendar.css';
import {format, subMonths, addMonths, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay, parse} from 'date-fns';

export class Calendar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentMonth: new Date(),
            Dates: []
        };
    }

    renderHeader() {
        const dateFormat = "MM yyyy";  return (
          <div className="header row flex-middle">
            <div className="col col-start">
              <div className="icon" onClick={this.prevMonth}>
                chevron_left
              </div>
            </div>
            <div className="col col-center">
              <span>
                {format(this.state.currentMonth, dateFormat)}
              </span>
            </div>
            <div className="col col-end" onClick={this.nextMonth}>
              <div className="icon">chevron_right</div>
            </div>
          </div>
        );
      }

    renderDays() {
        const dateFormat = "eee";
        const days = [];  let startDate = startOfWeek(this.state.currentMonth);  for (let i = 0; i < 7; i++) {
            days.push(
            <div className="col col-center" key={i}>
                {format(addDays(startDate, i), dateFormat)}
            </div>
            );
        }  return <div className="days row">{days}</div>;
    }

    renderCells() {
        const currentMonth  = this.state.currentMonth;
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
        const dateFormat = "dd";
        const rows = [];let days = [];
        let day = startDate;
        let formattedDate = "";while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            const cloneDay = day;
            days.push(
            <div
                className={`col cell ${
                !isSameMonth(day, monthStart)
                    ? "disabled"
                    // : isSameDay(day, selectedDate) ? "selected" 
                    : ""
                }`}
                key={day}
                onClick={() => this.onDateClick(cloneDay)}
            >
                <span className="number">{formattedDate}</span>
                <span className="bg">{formattedDate}</span>
            </div>
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="row" key={day}>
            {days}
            </div>
        );
        days = [];
        }
        return <div className="body">{rows}</div>;
    }

    onDateClick = day => {
        console.log(day);
    }
    
    nextMonth = () => {
        this.setState({
          currentMonth: addMonths(this.state.currentMonth, 1)
        });
    }
    prevMonth = () => {
        this.setState({
          currentMonth: subMonths(this.state.currentMonth, 1)
        });
    };

    render() {
        return (
            <div className="container">
                <div className="calendar">
                    {/* {console.log(this.props.dates)} */}
                    {console.log(this.state.currentMonth)}
                    {this.renderHeader()}
                    {this.renderDays()}
                    {this.renderCells()}
                </div>
            </div>
        );
    }
}