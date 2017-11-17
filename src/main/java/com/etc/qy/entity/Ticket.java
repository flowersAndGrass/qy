package com.etc.qy.entity;

public class Ticket {
    private Integer ticketId;

    private Integer scenicId;

    private Integer ticketStock;

    private Integer ticketPrice;

    private String ticketIntroduction;

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