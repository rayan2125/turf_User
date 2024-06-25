import React, { useState } from "react";
import { View, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CustomDatePicker = ({ onCancel, onConfirm, isVisible }) => {





  return (
    <View>

      <DateTimePickerModal
        headerTextAndroidStyle={{ color: "red" }}
        headerTextIOSStyle={{ color: "red" }}
        isVisible={isVisible}
        mode="time"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </View>
  );
};

export default CustomDatePicker;
