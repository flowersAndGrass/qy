package com.etc.qy.entity;

public class Area {
    @Override
	public String toString() {
		return "Area [areaId=" + areaId + ", areaName=" + areaName + "]";
	}

	private int areaId;

    private String areaName;

    public int getAreaId() {
        return areaId;
    }

    public void setAreaId(int areaId) {
        this.areaId = areaId;
    }

    public String getAreaName() {
        return areaName;
    }

    public Area(int areaId, String areaName) {
		super();
		this.areaId = areaId;
		this.areaName = areaName;
	}

	public void setAreaName(String areaName) {
        this.areaName = areaName == null ? null : areaName.trim();
    }

	public Area() {
		super();
	}
}