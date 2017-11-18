package com.etc.qy.entity;

public class Scenic {
    private Integer scenicId;

    private Integer cityId;

    private String scenicInfoAddress;

    private String scenicIntroduction;

    private Boolean isFree;

    private Boolean scenicState;
    public Scenic() {
		// TODO Auto-generated constructor stub
	}
    

    public Scenic(Integer scenicId, Integer cityId, String scenicInfoAddress, String scenicIntroduction, Boolean isFree,
			Boolean scenicState) {
		super();
		this.scenicId = scenicId;
		this.cityId = cityId;
		this.scenicInfoAddress = scenicInfoAddress;
		this.scenicIntroduction = scenicIntroduction;
		this.isFree = isFree;
		this.scenicState = scenicState;
	}


	@Override
	public String toString() {
		return "Scenic [scenicId=" + scenicId + ", cityId=" + cityId + ", scenicInfoAddress=" + scenicInfoAddress
				+ ", scenicIntroduction=" + scenicIntroduction + ", isFree=" + isFree + ", scenicState=" + scenicState
				+ "]";
	}


	public Integer getScenicId() {
        return scenicId;
    }

    public void setScenicId(Integer scenicId) {
        this.scenicId = scenicId;
    }

    public Integer getCityId() {
        return cityId;
    }

    public void setCityId(Integer cityId) {
        this.cityId = cityId;
    }

    public String getScenicInfoAddress() {
        return scenicInfoAddress;
    }

    public void setScenicInfoAddress(String scenicInfoAddress) {
        this.scenicInfoAddress = scenicInfoAddress == null ? null : scenicInfoAddress.trim();
    }

    public String getScenicIntroduction() {
        return scenicIntroduction;
    }

    public void setScenicIntroduction(String scenicIntroduction) {
        this.scenicIntroduction = scenicIntroduction == null ? null : scenicIntroduction.trim();
    }

    public Boolean getIsFree() {
        return isFree;
    }

    public void setIsFree(Boolean isFree) {
        this.isFree = isFree;
    }

    public Boolean getScenicState() {
        return scenicState;
    }

    public void setScenicState(Boolean scenicState) {
        this.scenicState = scenicState;
    }
}