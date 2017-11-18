package com.etc.qy.entity;

public class Ticket {
    private Integer ticketId;
    private String ticketName;
    private	Integer typeId;
    private Integer scenicId;

    private Integer ticketStock;

    private Integer ticketPrice;

    private String ticketIntroduction;
    public Ticket() {
		// TODO Auto-generated constructor stub
	}
    
    
    public Ticket(Integer ticketId, String ticketName, Integer typeId, Integer scenicId, Integer ticketStock,
			Integer ticketPrice, String ticketIntroduction) {
		super();
		this.ticketId = ticketId;
		this.ticketName = ticketName;
		this.typeId = typeId;
		this.scenicId = scenicId;
		this.ticketStock = ticketStock;
		this.ticketPrice = ticketPrice;
		this.ticketIntroduction = ticketIntroduction;
	}


	@Override
	public String toString() {
		return "Ticket [ticketId=" + ticketId + ", ticketName=" + ticketName + ", typeId=" + typeId + ", scenicId="
				+ scenicId + ", ticketStock=" + ticketStock + ", ticketPrice=" + ticketPrice + ", ticketIntroduction="
				+ ticketIntroduction + "]";
	}


	public String getTicketName() {
		return ticketName;
	}

	public void setTicketName(String ticketName) {
		this.ticketName = ticketName;
	}

	public Integer getTypeId() {
		return typeId;
	}

	public void setTypeId(Integer typeId) {
		this.typeId = typeId;
	}

	

    public Integer getTicketId() {
        return ticketId;
    }

    public void setTicketId(Integer ticketId) {
        this.ticketId = ticketId;
    }

    public Integer getScenicId() {
        return scenicId;
    }

    public void setScenicId(Integer scenicId) {
        this.scenicId = scenicId;
    }

    public Integer getTicketStock() {
        return ticketStock;
    }

    public void setTicketStock(Integer ticketStock) {
        this.ticketStock = ticketStock;
    }

    public Integer getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(Integer ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

    public String getTicketIntroduction() {
        return ticketIntroduction;
    }

    public void setTicketIntroduction(String ticketIntroduction) {
        this.ticketIntroduction = ticketIntroduction == null ? null : ticketIntroduction.trim();
    }
}