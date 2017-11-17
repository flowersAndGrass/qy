package com.etc.qy.entity;

import java.util.Date;

public class TourNotes {
    private Integer tourNoteId;

    private Integer userId;

    private Integer tourId;

    private String tourNoteTitle;

    private String tourNoteContent;

    private Date tourNoteCreatDate;

    private Date tourNoteUpdateDate;

    private Boolean tourNoteState;

    public Integer getTourNoteId() {
        return tourNoteId;
    }

    public void setTourNoteId(Integer tourNoteId) {
        this.tourNoteId = tourNoteId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getTourId() {
        return tourId;
    }

    public void setTourId(Integer tourId) {
        this.tourId = tourId;
    }

    public String getTourNoteTitle() {
        return tourNoteTitle;
    }

    public void setTourNoteTitle(String tourNoteTitle) {
        this.tourNoteTitle = tourNoteTitle == null ? null : tourNoteTitle.trim();
    }

    public String getTourNoteContent() {
        return tourNoteContent;
    }

    public void setTourNoteContent(String tourNoteContent) {
        this.tourNoteContent = tourNoteContent == null ? null : tourNoteContent.trim();
    }

    public Date getTourNoteCreatDate() {
        return tourNoteCreatDate;
    }

    public void setTourNoteCreatDate(Date tourNoteCreatDate) {
        this.tourNoteCreatDate = tourNoteCreatDate;
    }

    public Date getTourNoteUpdateDate() {
        return tourNoteUpdateDate;
    }

    public void setTourNoteUpdateDate(Date tourNoteUpdateDate) {
        this.tourNoteUpdateDate = tourNoteUpdateDate;
    }

    public Boolean getTourNoteState() {
        return tourNoteState;
    }

    public void setTourNoteState(Boolean tourNoteState) {
        this.tourNoteState = tourNoteState;
    }
}