package com.etc.qy.entity;

public class City {
    @Override
	public String toString() {
		return "City [cityId=" + cityId + ", areaId=" + areaId + ", cityName=" + cityName + ", cityPictureId="
				+ cityPictureId + "]";
	}

	private int cityId;

    private int areaId;

    private String cityName;

    private int cityPictureId;

    public int getCityId() {
        return cityId;
    }

    public void setCityId(int cityId) {
        this.cityId = cityId;
    }

    public int getAreaId() {
        return areaId;
    }

    public void setAreaId(int areaId) {
        this.areaId = areaId;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName == null ? null : cityName.trim();
    }

    public int getCityPictureId() {
        return cityPictureId;
    }

    public void setCityPictureId(int cityPictureId) {
        this.cityPictureId = cityPictureId;
    }
}