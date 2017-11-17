package com.etc.qy.entity;

import java.util.Date;

public class UsersInfo {
    private int infoId;

    private int userId;

    private String userSex;

    private Date userBirthday;

    private String userNowAddress;

    private String userBeforeAddress;

    private String userSignature;

    private String userTourPerecen;

    private int userIntegral;

    private String userHeadPicture;

    public int getInfoId() {
        return infoId;
    }

    public void setInfoId(int infoId) {
        this.infoId = infoId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserSex() {
        return userSex;
    }

    public void setUserSex(String userSex) {
        this.userSex = userSex == null ? null : userSex.trim();
    }

    public Date getUserBirthday() {
        return userBirthday;
    }

    public void setUserBirthday(Date userBirthday) {
        this.userBirthday = userBirthday;
    }

    public String getUserNowAddress() {
        return userNowAddress;
    }

    public void setUserNowAddress(String userNowAddress) {
        this.userNowAddress = userNowAddress == null ? null : userNowAddress.trim();
    }

    public String getUserBeforeAddress() {
        return userBeforeAddress;
    }

    public void setUserBeforeAddress(String userBeforeAddress) {
        this.userBeforeAddress = userBeforeAddress == null ? null : userBeforeAddress.trim();
    }

    public String getUserSignature() {
        return userSignature;
    }

    public void setUserSignature(String userSignature) {
        this.userSignature = userSignature == null ? null : userSignature.trim();
    }

    public String getUserTourPerecen() {
        return userTourPerecen;
    }

    public void setUserTourPerecen(String userTourPerecen) {
        this.userTourPerecen = userTourPerecen == null ? null : userTourPerecen.trim();
    }

    public int getUserIntegral() {
        return userIntegral;
    }

    public void setUserIntegral(int userIntegral) {
        this.userIntegral = userIntegral;
    }

    public String getUserHeadPicture() {
        return userHeadPicture;
    }

    public void setUserHeadPicture(String userHeadPicture) {
        this.userHeadPicture = userHeadPicture == null ? null : userHeadPicture.trim();
    }
}