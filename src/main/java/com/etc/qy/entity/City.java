package com.etc.qy.entity;

public class City {
    private Integer cityId;

    private Integer areaId;

    private String cityName;

    private String cityPicture;

    public Integer getCityId() {
        return cityId;
    }

    public void setCityId(Integer cityId) {
        this.cityId = cityId;
    }

    public Integer getAreaId() {
        return areaId;
    }

    public void setAreaId(Integer areaId) {
        this.areaId = areaId;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName == null ? null : cityName.trim();
    }

    public String getCityPicture() {
        return cityPicture;
    }

    public void setCityPicture(String cityPicture) {
        this.cityPicture = cityPicture == null ? null : cityPicture.trim();
    }

	public City(Integer cityId, Integer areaId, String cityName, String cityPicture) {
		super();
		this.cityId = cityId;
		this.areaId = areaId;
		this.cityName = cityName;
		this.cityPicture = cityPicture;
	}

	public City() {
		super();
	}

	@Override
	public String toString() {
		return "City [cityId=" + cityId + ", areaId=" + areaId + ", cityName=" + cityName + ", cityPicture="
				+ cityPicture + "]";
	}
}