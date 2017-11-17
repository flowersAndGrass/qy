package com.etc.qy.entity;

public class Linkman {
    private Integer linkManId;

    private Integer userId;

    private Integer userCardId;

    private String linkManName;

    private String linkManTel;

    private String linkManContent;

    public Integer getLinkManId() {
        return linkManId;
    }

    public void setLinkManId(Integer linkManId) {
        this.linkManId = linkManId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getUserCardId() {
        return userCardId;
    }

    public void setUserCardId(Integer userCardId) {
        this.userCardId = userCardId;
    }

    public String getLinkManName() {
        return linkManName;
    }

    public void setLinkManName(String linkManName) {
        this.linkManName = linkManName == null ? null : linkManName.trim();
    }

    public String getLinkManTel() {
        return linkManTel;
    }

    public void setLinkManTel(String linkManTel) {
        this.linkManTel = linkManTel == null ? null : linkManTel.trim();
    }

    public String getLinkManContent() {
        return linkManContent;
    }

    public void setLinkManContent(String linkManContent) {
        this.linkManContent = linkManContent == null ? null : linkManContent.trim();
    }
}