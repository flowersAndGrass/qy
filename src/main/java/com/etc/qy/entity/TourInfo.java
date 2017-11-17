package com.etc.qy.entity;

import java.util.Date;

public class TourInfo {
    private Integer infoId;

    private Integer tourId;

    private Integer cityId;

    private Integer scenicId;

    private Date cityStartDate;

    public Integer getInfoId() {
        return infoId;
    }

    public void setInfoId(Integer infoId) {
        this.infoId = infoId;
    }

    public Integer getTourId() {
        return tourId;
    }

    public void setTourId(Integer tourId) {
        this.tourId = tourId;
    }

    public Integer getCityId() {
        return cityId;
    }

    public void setCityId(Integer cityId) {
        this.cityId = cityId;
    }

    public Integer getScenicId() {
        return scenicId;
    }

    public void setScenicId(Integer scenicId) {
        this.scenicId = scenicId;
    }

    public Date getCityStartDate() {
        return cityStartDate;
    }

    public void setCityStartDate(Date cityStartDate) {
        this.cityStartDate = cityStartDate;
    }
}