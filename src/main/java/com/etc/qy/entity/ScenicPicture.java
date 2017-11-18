package com.etc.qy.entity;

public class ScenicPicture {
    private Integer pictureId;

    private Integer scenicId;

    private String pictureAddress;
    public ScenicPicture() {
		// TODO Auto-generated constructor stub
	}
    
    
    public ScenicPicture(Integer pictureId, Integer scenicId, String pictureAddress) {
		super();
		this.pictureId = pictureId;
		this.scenicId = scenicId;
		this.pictureAddress = pictureAddress;
	}


	public Integer getPictureId() {
        return pictureId;
    }

    public void setPictureId(Integer pictureId) {
        this.pictureId = pictureId;
    }

    public Integer getScenicId() {
        return scenicId;
    }

    public void setScenicId(Integer scenicId) {
        this.scenicId = scenicId;
    }

    public String getPictureAddress() {
        return pictureAddress;
    }

    public void setPictureAddress(String pictureAddress) {
        this.pictureAddress = pictureAddress == null ? null : pictureAddress.trim();
    }


	@Override
	public String toString() {
		return "ScenicPicture [pictureId=" + pictureId + ", scenicId=" + scenicId + ", pictureAddress=" + pictureAddress
				+ "]";
	}
    
}