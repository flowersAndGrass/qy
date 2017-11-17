package com.etc.qy.entity;

public class Users {
    private Integer userId;

    private String userName;

    private String userPwd;

    private String userTel;

    private Boolean userState;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName == null ? null : userName.trim();
    }

    public String getUserPwd() {
        return userPwd;
    }

    public void setUserPwd(String userPwd) {
        this.userPwd = userPwd == null ? null : userPwd.trim();
    }

    public String getUserTel() {
        return userTel;
    }

    public void setUserTel(String userTel) {
        this.userTel = userTel == null ? null : userTel.trim();
    }

    public Boolean getUserState() {
        return userState;
    }

    public void setUserState(Boolean userState) {
        this.userState = userState;
    }
}