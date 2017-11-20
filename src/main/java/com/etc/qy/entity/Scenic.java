package com.etc.qy.entity;

public class Scenic {
    private Integer scenicId;
    private String scenicName;

    private Integer cityId;

    private String scenicInfoAddress;

    private String scenicIntroduction;

    private Boolean isFree;

    private Boolean scenicState;
    
    private City city;
    
    private Scenic scenic;
    
    //private Scenic scenic;
  
   
    





	public Scenic getScenic() {
		return scenic;
	}








	public void setScenic(Scenic scenic) {
		this.scenic = scenic;
	}








	public City getCity() {
		return city;
	}








	public void setCity(City city) {
		this.city = city;
	}








	public Scenic() {
		// TODO Auto-generated constructor stub
	}
    

    










	public Scenic(Integer scenicId, String scenicName, Integer cityId, String scenicInfoAddress,
			String scenicIntroduction, Boolean isFree, Boolean scenicState, City city) {
		super();
		this.scenicId = scenicId;
		this.scenicName = scenicName;
		this.cityId = cityId;
		this.scenicInfoAddress = scenicInfoAddress;
		this.scenicIntroduction = scenicIntroduction;
		this.isFree = isFree;
		this.scenicState = scenicState;
		this.city = city;
	}








	


	@Override
	public String toString() {
		return "Scenic [scenicId=" + scenicId + ", scenicName=" + scenicName + ", cityId=" + cityId
				+ ", scenicInfoAddress=" + scenicInfoAddress + ", scenicIntroduction=" + scenicIntroduction
				+ ", isFree=" + isFree + ", scenicState=" + scenicState + ", city=" + city + "]";
	}








	public String getScenicName() {
		return scenicName;
	}


	public void setScenicName(String scenicName) {
		this.scenicName = scenicName;
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