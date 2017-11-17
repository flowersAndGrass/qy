package com.etc.qy.entity;

public class Avaluate {
    private Integer avaluateId;

    private Integer scenicId;

    private Integer userId;

    private String avaluateContent;

    private Integer avaluateState;

    public Integer getAvaluateId() {
        return avaluateId;
    }

    public void setAvaluateId(Integer avaluateId) {
        this.avaluateId = avaluateId;
    }

    public Integer getScenicId() {
        return scenicId;
    }

    public void setScenicId(Integer scenicId) {
        this.scenicId = scenicId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getAvaluateContent() {
        return avaluateContent;
    }

    public void setAvaluateContent(String avaluateContent) {
        this.avaluateContent = avaluateContent == null ? null : avaluateContent.trim();
    }

    public Integer getAvaluateState() {
        return avaluateState;
    }

    public void setAvaluateState(Integer avaluateState) {
        this.avaluateState = avaluateState;
    }
}