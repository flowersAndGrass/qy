package com.etc.qy.entity;

public class ScenicTournotesrelation {
    private Integer relationId;

    private Integer scenicId;

    private Integer tourNoteId;

    public Integer getRelationId() {
        return relationId;
    }

    public void setRelationId(Integer relationId) {
        this.relationId = relationId;
    }

    public Integer getScenicId() {
        return scenicId;
    }

    public void setScenicId(Integer scenicId) {
        this.scenicId = scenicId;
    }

    public Integer getTourNoteId() {
        return tourNoteId;
    }

    public void setTourNoteId(Integer tourNoteId) {
        this.tourNoteId = tourNoteId;
    }
}