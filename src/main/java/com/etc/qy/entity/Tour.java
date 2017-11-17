package com.etc.qy.entity;

import java.util.Date;

public class Tour {
    private Integer tourId;

    private String tourStartPlace;

    private Date tourStartDate;

    public Integer getTourId() {
        return tourId;
    }

    public void setTourId(Integer tourId) {
        this.tourId = tourId;
    }

    public String getTourStartPlace() {
        return tourStartPlace;
    }

    public void setTourStartPlace(String tourStartPlace) {
        this.tourStartPlace = tourStartPlace == null ? null : tourStartPlace.trim();
    }

    public Date getTourStartDate() {
        return tourStartDate;
    }

    public void setTourStartDate(Date tourStartDate) {
        this.tourStartDate = tourStartDate;
    }
}