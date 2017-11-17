package com.etc.qy.entity;

public class TourNotesCollect {
    private Integer tNotesCollectId;

    private Integer userId;

    private Integer tourNotesId;

    public Integer gettNotesCollectId() {
        return tNotesCollectId;
    }

    public void settNotesCollectId(Integer tNotesCollectId) {
        this.tNotesCollectId = tNotesCollectId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getTourNotesId() {
        return tourNotesId;
    }

    public void setTourNotesId(Integer tourNotesId) {
        this.tourNotesId = tourNotesId;
    }
}