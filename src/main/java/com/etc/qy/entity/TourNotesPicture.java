package com.etc.qy.entity;

public class TourNotesPicture {
    private Integer pictureId;

    private Integer tourNoteId;

    private String pictureAddress;

    public Integer getPictureId() {
        return pictureId;
    }

    public void setPictureId(Integer pictureId) {
        this.pictureId = pictureId;
    }

    public Integer getTourNoteId() {
        return tourNoteId;
    }

    public void setTourNoteId(Integer tourNoteId) {
        this.tourNoteId = tourNoteId;
    }

    public String getPictureAddress() {
        return pictureAddress;
    }

    public void setPictureAddress(String pictureAddress) {
        this.pictureAddress = pictureAddress == null ? null : pictureAddress.trim();
    }
}