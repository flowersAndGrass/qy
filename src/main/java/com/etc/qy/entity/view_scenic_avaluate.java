package com.etc.qy.entity;

public class view_scenic_avaluate {
    private Integer scenicId;

    private String scenicName;

    private Integer avaluateState;

    public Integer getScenicId() {
        return scenicId;
    }

    public void setScenicId(Integer scenicId) {
        this.scenicId = scenicId;
    }

    public String getScenicName() {
        return scenicName;
    }

    public void setScenicName(String scenicName) {
        this.scenicName = scenicName == null ? null : scenicName.trim();
    }

    public Integer getAvaluateState() {
        return avaluateState;
    }

    public void setAvaluateState(Integer avaluateState) {
        this.avaluateState = avaluateState;
    }

	public view_scenic_avaluate(Integer scenicId, String scenicName, Integer avaluateState) {
		super();
		this.scenicId = scenicId;
		this.scenicName = scenicName;
		this.avaluateState = avaluateState;
	}

	public view_scenic_avaluate() {
		super();
	}

	@Override
	public String toString() {
		return "view_scenic_avaluate [scenicId=" + scenicId + ", scenicName=" + scenicName + ", avaluateState="
				+ avaluateState + "]";
	}
}