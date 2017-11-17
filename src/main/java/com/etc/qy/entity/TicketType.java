package com.etc.qy.entity;

public class TicketType {
    private Integer typeId;

    private String typeName;

    private Double typeDiscount;

    public Integer getTypeId() {
        return typeId;
    }

    public void setTypeId(Integer typeId) {
        this.typeId = typeId;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName == null ? null : typeName.trim();
    }

    public Double getTypeDiscount() {
        return typeDiscount;
    }

    public void setTypeDiscount(Double typeDiscount) {
        this.typeDiscount = typeDiscount;
    }
}