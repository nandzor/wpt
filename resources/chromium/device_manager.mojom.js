// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'device/usb/public/mojom/device_manager.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('device.mojom');
  var device$ =
      mojo.internal.exposeNamespace('device.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'device/usb/public/mojom/device.mojom', 'device.mojom.js');
  }
  var file$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file.mojom', '../../../../mojo/public/mojom/base/file.mojom.js');
  }
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../mojo/public/mojom/base/string16.mojom.js');
  }



  function UsbDeviceFilter(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceFilter.prototype.initDefaults_ = function() {
    this.hasVendorId = false;
    this.hasProductId = false;
    this.hasClassCode = false;
    this.hasSubclassCode = false;
    this.hasProtocolCode = false;
    this.classCode = 0;
    this.vendorId = 0;
    this.productId = 0;
    this.subclassCode = 0;
    this.protocolCode = 0;
    this.serialNumber = null;
  };
  UsbDeviceFilter.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceFilter.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;












    // validate UsbDeviceFilter.serialNumber
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, string16$.String16, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceFilter.encodedSize = codec.kStructHeaderSize + 16;

  UsbDeviceFilter.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceFilter();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.hasVendorId = (packed >> 0) & 1 ? true : false;
    val.hasProductId = (packed >> 1) & 1 ? true : false;
    val.hasClassCode = (packed >> 2) & 1 ? true : false;
    val.hasSubclassCode = (packed >> 3) & 1 ? true : false;
    val.hasProtocolCode = (packed >> 4) & 1 ? true : false;
    val.classCode = decoder.decodeStruct(codec.Uint8);
    val.vendorId = decoder.decodeStruct(codec.Uint16);
    val.productId = decoder.decodeStruct(codec.Uint16);
    val.subclassCode = decoder.decodeStruct(codec.Uint8);
    val.protocolCode = decoder.decodeStruct(codec.Uint8);
    val.serialNumber = decoder.decodeStructPointer(string16$.String16);
    return val;
  };

  UsbDeviceFilter.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceFilter.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.hasVendorId & 1) << 0
    packed |= (val.hasProductId & 1) << 1
    packed |= (val.hasClassCode & 1) << 2
    packed |= (val.hasSubclassCode & 1) << 3
    packed |= (val.hasProtocolCode & 1) << 4
    encoder.writeUint8(packed);
    encoder.encodeStruct(codec.Uint8, val.classCode);
    encoder.encodeStruct(codec.Uint16, val.vendorId);
    encoder.encodeStruct(codec.Uint16, val.productId);
    encoder.encodeStruct(codec.Uint8, val.subclassCode);
    encoder.encodeStruct(codec.Uint8, val.protocolCode);
    encoder.encodeStructPointer(string16$.String16, val.serialNumber);
  };
  function UsbEnumerationOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbEnumerationOptions.prototype.initDefaults_ = function() {
    this.filters = null;
  };
  UsbEnumerationOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbEnumerationOptions.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbEnumerationOptions.filters
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(UsbDeviceFilter), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbEnumerationOptions.encodedSize = codec.kStructHeaderSize + 8;

  UsbEnumerationOptions.decode = function(decoder) {
    var packed;
    var val = new UsbEnumerationOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filters = decoder.decodeArrayPointer(new codec.PointerTo(UsbDeviceFilter));
    return val;
  };

  UsbEnumerationOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbEnumerationOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(UsbDeviceFilter), val.filters);
  };
  function UsbDeviceManager_EnumerateDevicesAndSetClient_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_EnumerateDevicesAndSetClient_Params.prototype.initDefaults_ = function() {
    this.client = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  UsbDeviceManager_EnumerateDevicesAndSetClient_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_EnumerateDevicesAndSetClient_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManager_EnumerateDevicesAndSetClient_Params.client
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_EnumerateDevicesAndSetClient_Params.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManager_EnumerateDevicesAndSetClient_Params.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_EnumerateDevicesAndSetClient_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    return val;
  };

  UsbDeviceManager_EnumerateDevicesAndSetClient_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_EnumerateDevicesAndSetClient_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.client);
  };
  function UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams.prototype.initDefaults_ = function() {
    this.results = null;
  };
  UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams.results
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(device$.UsbDeviceInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.results = decoder.decodeArrayPointer(new codec.PointerTo(device$.UsbDeviceInfo));
    return val;
  };

  UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(device$.UsbDeviceInfo), val.results);
  };
  function UsbDeviceManager_GetDevices_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_GetDevices_Params.prototype.initDefaults_ = function() {
    this.options = null;
  };
  UsbDeviceManager_GetDevices_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_GetDevices_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManager_GetDevices_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, UsbEnumerationOptions, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_GetDevices_Params.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManager_GetDevices_Params.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_GetDevices_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.options = decoder.decodeStructPointer(UsbEnumerationOptions);
    return val;
  };

  UsbDeviceManager_GetDevices_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_GetDevices_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(UsbEnumerationOptions, val.options);
  };
  function UsbDeviceManager_GetDevices_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_GetDevices_ResponseParams.prototype.initDefaults_ = function() {
    this.results = null;
  };
  UsbDeviceManager_GetDevices_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_GetDevices_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManager_GetDevices_ResponseParams.results
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(device$.UsbDeviceInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_GetDevices_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManager_GetDevices_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_GetDevices_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.results = decoder.decodeArrayPointer(new codec.PointerTo(device$.UsbDeviceInfo));
    return val;
  };

  UsbDeviceManager_GetDevices_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_GetDevices_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(device$.UsbDeviceInfo), val.results);
  };
  function UsbDeviceManager_GetDevice_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_GetDevice_Params.prototype.initDefaults_ = function() {
    this.guid = null;
    this.deviceRequest = new bindings.InterfaceRequest();
    this.deviceClient = new device$.UsbDeviceClientPtr();
  };
  UsbDeviceManager_GetDevice_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_GetDevice_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManager_GetDevice_Params.guid
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManager_GetDevice_Params.deviceRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManager_GetDevice_Params.deviceClient
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 12, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_GetDevice_Params.encodedSize = codec.kStructHeaderSize + 24;

  UsbDeviceManager_GetDevice_Params.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_GetDevice_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.guid = decoder.decodeStruct(codec.String);
    val.deviceRequest = decoder.decodeStruct(codec.InterfaceRequest);
    val.deviceClient = decoder.decodeStruct(new codec.NullableInterface(device$.UsbDeviceClientPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  UsbDeviceManager_GetDevice_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_GetDevice_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.guid);
    encoder.encodeStruct(codec.InterfaceRequest, val.deviceRequest);
    encoder.encodeStruct(new codec.NullableInterface(device$.UsbDeviceClientPtr), val.deviceClient);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function UsbDeviceManager_CheckAccess_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_CheckAccess_Params.prototype.initDefaults_ = function() {
    this.guid = null;
  };
  UsbDeviceManager_CheckAccess_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_CheckAccess_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManager_CheckAccess_Params.guid
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_CheckAccess_Params.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManager_CheckAccess_Params.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_CheckAccess_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.guid = decoder.decodeStruct(codec.String);
    return val;
  };

  UsbDeviceManager_CheckAccess_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_CheckAccess_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.guid);
  };
  function UsbDeviceManager_CheckAccess_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_CheckAccess_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  UsbDeviceManager_CheckAccess_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_CheckAccess_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  UsbDeviceManager_CheckAccess_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManager_CheckAccess_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_CheckAccess_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  UsbDeviceManager_CheckAccess_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_CheckAccess_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function UsbDeviceManager_OpenFileDescriptor_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_OpenFileDescriptor_Params.prototype.initDefaults_ = function() {
    this.guid = null;
  };
  UsbDeviceManager_OpenFileDescriptor_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_OpenFileDescriptor_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManager_OpenFileDescriptor_Params.guid
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_OpenFileDescriptor_Params.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManager_OpenFileDescriptor_Params.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_OpenFileDescriptor_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.guid = decoder.decodeStruct(codec.String);
    return val;
  };

  UsbDeviceManager_OpenFileDescriptor_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_OpenFileDescriptor_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.guid);
  };
  function UsbDeviceManager_OpenFileDescriptor_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_OpenFileDescriptor_ResponseParams.prototype.initDefaults_ = function() {
    this.fd = null;
  };
  UsbDeviceManager_OpenFileDescriptor_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_OpenFileDescriptor_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManager_OpenFileDescriptor_ResponseParams.fd
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file$.File, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_OpenFileDescriptor_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManager_OpenFileDescriptor_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_OpenFileDescriptor_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fd = decoder.decodeStructPointer(file$.File);
    return val;
  };

  UsbDeviceManager_OpenFileDescriptor_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_OpenFileDescriptor_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file$.File, val.fd);
  };
  function UsbDeviceManager_SetClient_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_SetClient_Params.prototype.initDefaults_ = function() {
    this.client = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  UsbDeviceManager_SetClient_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_SetClient_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManager_SetClient_Params.client
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_SetClient_Params.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManager_SetClient_Params.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_SetClient_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    return val;
  };

  UsbDeviceManager_SetClient_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_SetClient_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.client);
  };
  function UsbDeviceManagerClient_OnDeviceAdded_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManagerClient_OnDeviceAdded_Params.prototype.initDefaults_ = function() {
    this.deviceInfo = null;
  };
  UsbDeviceManagerClient_OnDeviceAdded_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManagerClient_OnDeviceAdded_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManagerClient_OnDeviceAdded_Params.deviceInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, device$.UsbDeviceInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManagerClient_OnDeviceAdded_Params.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManagerClient_OnDeviceAdded_Params.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManagerClient_OnDeviceAdded_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceInfo = decoder.decodeStructPointer(device$.UsbDeviceInfo);
    return val;
  };

  UsbDeviceManagerClient_OnDeviceAdded_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManagerClient_OnDeviceAdded_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(device$.UsbDeviceInfo, val.deviceInfo);
  };
  function UsbDeviceManagerClient_OnDeviceRemoved_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManagerClient_OnDeviceRemoved_Params.prototype.initDefaults_ = function() {
    this.deviceInfo = null;
  };
  UsbDeviceManagerClient_OnDeviceRemoved_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManagerClient_OnDeviceRemoved_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManagerClient_OnDeviceRemoved_Params.deviceInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, device$.UsbDeviceInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManagerClient_OnDeviceRemoved_Params.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManagerClient_OnDeviceRemoved_Params.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManagerClient_OnDeviceRemoved_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceInfo = decoder.decodeStructPointer(device$.UsbDeviceInfo);
    return val;
  };

  UsbDeviceManagerClient_OnDeviceRemoved_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManagerClient_OnDeviceRemoved_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(device$.UsbDeviceInfo, val.deviceInfo);
  };
  var kUsbDeviceManager_EnumerateDevicesAndSetClient_Name = 0;
  var kUsbDeviceManager_GetDevices_Name = 1;
  var kUsbDeviceManager_GetDevice_Name = 2;
  var kUsbDeviceManager_CheckAccess_Name = 3;
  var kUsbDeviceManager_OpenFileDescriptor_Name = 4;
  var kUsbDeviceManager_SetClient_Name = 5;

  function UsbDeviceManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(UsbDeviceManager,
                                                   handleOrPtrInfo);
  }

  function UsbDeviceManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        UsbDeviceManager, associatedInterfacePtrInfo);
  }

  UsbDeviceManagerAssociatedPtr.prototype =
      Object.create(UsbDeviceManagerPtr.prototype);
  UsbDeviceManagerAssociatedPtr.prototype.constructor =
      UsbDeviceManagerAssociatedPtr;

  function UsbDeviceManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  UsbDeviceManagerPtr.prototype.enumerateDevicesAndSetClient = function() {
    return UsbDeviceManagerProxy.prototype.enumerateDevicesAndSetClient
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbDeviceManagerProxy.prototype.enumerateDevicesAndSetClient = function(client) {
    var params_ = new UsbDeviceManager_EnumerateDevicesAndSetClient_Params();
    params_.client = client;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV2Builder(
          kUsbDeviceManager_EnumerateDevicesAndSetClient_Name,
          codec.align(UsbDeviceManager_EnumerateDevicesAndSetClient_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.setPayload(UsbDeviceManager_EnumerateDevicesAndSetClient_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  UsbDeviceManagerPtr.prototype.getDevices = function() {
    return UsbDeviceManagerProxy.prototype.getDevices
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbDeviceManagerProxy.prototype.getDevices = function(options) {
    var params_ = new UsbDeviceManager_GetDevices_Params();
    params_.options = options;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kUsbDeviceManager_GetDevices_Name,
          codec.align(UsbDeviceManager_GetDevices_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(UsbDeviceManager_GetDevices_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(UsbDeviceManager_GetDevices_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  UsbDeviceManagerPtr.prototype.getDevice = function() {
    return UsbDeviceManagerProxy.prototype.getDevice
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbDeviceManagerProxy.prototype.getDevice = function(guid, deviceRequest, deviceClient) {
    var params_ = new UsbDeviceManager_GetDevice_Params();
    params_.guid = guid;
    params_.deviceRequest = deviceRequest;
    params_.deviceClient = deviceClient;
    var builder = new codec.MessageV0Builder(
        kUsbDeviceManager_GetDevice_Name,
        codec.align(UsbDeviceManager_GetDevice_Params.encodedSize));
    builder.encodeStruct(UsbDeviceManager_GetDevice_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  UsbDeviceManagerPtr.prototype.checkAccess = function() {
    return UsbDeviceManagerProxy.prototype.checkAccess
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbDeviceManagerProxy.prototype.checkAccess = function(guid) {
    var params_ = new UsbDeviceManager_CheckAccess_Params();
    params_.guid = guid;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kUsbDeviceManager_CheckAccess_Name,
          codec.align(UsbDeviceManager_CheckAccess_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(UsbDeviceManager_CheckAccess_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(UsbDeviceManager_CheckAccess_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  UsbDeviceManagerPtr.prototype.openFileDescriptor = function() {
    return UsbDeviceManagerProxy.prototype.openFileDescriptor
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbDeviceManagerProxy.prototype.openFileDescriptor = function(guid) {
    var params_ = new UsbDeviceManager_OpenFileDescriptor_Params();
    params_.guid = guid;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kUsbDeviceManager_OpenFileDescriptor_Name,
          codec.align(UsbDeviceManager_OpenFileDescriptor_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(UsbDeviceManager_OpenFileDescriptor_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(UsbDeviceManager_OpenFileDescriptor_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  UsbDeviceManagerPtr.prototype.setClient = function() {
    return UsbDeviceManagerProxy.prototype.setClient
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbDeviceManagerProxy.prototype.setClient = function(client) {
    var params_ = new UsbDeviceManager_SetClient_Params();
    params_.client = client;
    var builder = new codec.MessageV2Builder(
        kUsbDeviceManager_SetClient_Name,
        codec.align(UsbDeviceManager_SetClient_Params.encodedSize));
    builder.setPayload(UsbDeviceManager_SetClient_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function UsbDeviceManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  UsbDeviceManagerStub.prototype.enumerateDevicesAndSetClient = function(client) {
    return this.delegate_ && this.delegate_.enumerateDevicesAndSetClient && this.delegate_.enumerateDevicesAndSetClient(client);
  }
  UsbDeviceManagerStub.prototype.getDevices = function(options) {
    return this.delegate_ && this.delegate_.getDevices && this.delegate_.getDevices(options);
  }
  UsbDeviceManagerStub.prototype.getDevice = function(guid, deviceRequest, deviceClient) {
    return this.delegate_ && this.delegate_.getDevice && this.delegate_.getDevice(guid, deviceRequest, deviceClient);
  }
  UsbDeviceManagerStub.prototype.checkAccess = function(guid) {
    return this.delegate_ && this.delegate_.checkAccess && this.delegate_.checkAccess(guid);
  }
  UsbDeviceManagerStub.prototype.openFileDescriptor = function(guid) {
    return this.delegate_ && this.delegate_.openFileDescriptor && this.delegate_.openFileDescriptor(guid);
  }
  UsbDeviceManagerStub.prototype.setClient = function(client) {
    return this.delegate_ && this.delegate_.setClient && this.delegate_.setClient(client);
  }

  UsbDeviceManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kUsbDeviceManager_GetDevice_Name:
      var params = reader.decodeStruct(UsbDeviceManager_GetDevice_Params);
      this.getDevice(params.guid, params.deviceRequest, params.deviceClient);
      return true;
    case kUsbDeviceManager_SetClient_Name:
      var params = reader.decodeStruct(UsbDeviceManager_SetClient_Params);
      this.setClient(params.client);
      return true;
    default:
      return false;
    }
  };

  UsbDeviceManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kUsbDeviceManager_EnumerateDevicesAndSetClient_Name:
      var params = reader.decodeStruct(UsbDeviceManager_EnumerateDevicesAndSetClient_Params);
      this.enumerateDevicesAndSetClient(params.client).then(function(response) {
        var responseParams =
            new UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams();
        responseParams.results = response.results;
        var builder = new codec.MessageV2Builder(
            kUsbDeviceManager_EnumerateDevicesAndSetClient_Name,
            codec.align(UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams
                .encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.setPayload(UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kUsbDeviceManager_GetDevices_Name:
      var params = reader.decodeStruct(UsbDeviceManager_GetDevices_Params);
      this.getDevices(params.options).then(function(response) {
        var responseParams =
            new UsbDeviceManager_GetDevices_ResponseParams();
        responseParams.results = response.results;
        var builder = new codec.MessageV1Builder(
            kUsbDeviceManager_GetDevices_Name,
            codec.align(UsbDeviceManager_GetDevices_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(UsbDeviceManager_GetDevices_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kUsbDeviceManager_CheckAccess_Name:
      var params = reader.decodeStruct(UsbDeviceManager_CheckAccess_Params);
      this.checkAccess(params.guid).then(function(response) {
        var responseParams =
            new UsbDeviceManager_CheckAccess_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kUsbDeviceManager_CheckAccess_Name,
            codec.align(UsbDeviceManager_CheckAccess_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(UsbDeviceManager_CheckAccess_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kUsbDeviceManager_OpenFileDescriptor_Name:
      var params = reader.decodeStruct(UsbDeviceManager_OpenFileDescriptor_Params);
      this.openFileDescriptor(params.guid).then(function(response) {
        var responseParams =
            new UsbDeviceManager_OpenFileDescriptor_ResponseParams();
        responseParams.fd = response.fd;
        var builder = new codec.MessageV1Builder(
            kUsbDeviceManager_OpenFileDescriptor_Name,
            codec.align(UsbDeviceManager_OpenFileDescriptor_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(UsbDeviceManager_OpenFileDescriptor_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateUsbDeviceManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kUsbDeviceManager_EnumerateDevicesAndSetClient_Name:
        if (message.expectsResponse())
          paramsClass = UsbDeviceManager_EnumerateDevicesAndSetClient_Params;
      break;
      case kUsbDeviceManager_GetDevices_Name:
        if (message.expectsResponse())
          paramsClass = UsbDeviceManager_GetDevices_Params;
      break;
      case kUsbDeviceManager_GetDevice_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = UsbDeviceManager_GetDevice_Params;
      break;
      case kUsbDeviceManager_CheckAccess_Name:
        if (message.expectsResponse())
          paramsClass = UsbDeviceManager_CheckAccess_Params;
      break;
      case kUsbDeviceManager_OpenFileDescriptor_Name:
        if (message.expectsResponse())
          paramsClass = UsbDeviceManager_OpenFileDescriptor_Params;
      break;
      case kUsbDeviceManager_SetClient_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = UsbDeviceManager_SetClient_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateUsbDeviceManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kUsbDeviceManager_EnumerateDevicesAndSetClient_Name:
        if (message.isResponse())
          paramsClass = UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams;
        break;
      case kUsbDeviceManager_GetDevices_Name:
        if (message.isResponse())
          paramsClass = UsbDeviceManager_GetDevices_ResponseParams;
        break;
      case kUsbDeviceManager_CheckAccess_Name:
        if (message.isResponse())
          paramsClass = UsbDeviceManager_CheckAccess_ResponseParams;
        break;
      case kUsbDeviceManager_OpenFileDescriptor_Name:
        if (message.isResponse())
          paramsClass = UsbDeviceManager_OpenFileDescriptor_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var UsbDeviceManager = {
    name: 'device.mojom.UsbDeviceManager',
    kVersion: 0,
    ptrClass: UsbDeviceManagerPtr,
    proxyClass: UsbDeviceManagerProxy,
    stubClass: UsbDeviceManagerStub,
    validateRequest: validateUsbDeviceManagerRequest,
    validateResponse: validateUsbDeviceManagerResponse,
  };
  UsbDeviceManagerStub.prototype.validator = validateUsbDeviceManagerRequest;
  UsbDeviceManagerProxy.prototype.validator = validateUsbDeviceManagerResponse;
  var kUsbDeviceManagerClient_OnDeviceAdded_Name = 0;
  var kUsbDeviceManagerClient_OnDeviceRemoved_Name = 1;

  function UsbDeviceManagerClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(UsbDeviceManagerClient,
                                                   handleOrPtrInfo);
  }

  function UsbDeviceManagerClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        UsbDeviceManagerClient, associatedInterfacePtrInfo);
  }

  UsbDeviceManagerClientAssociatedPtr.prototype =
      Object.create(UsbDeviceManagerClientPtr.prototype);
  UsbDeviceManagerClientAssociatedPtr.prototype.constructor =
      UsbDeviceManagerClientAssociatedPtr;

  function UsbDeviceManagerClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  UsbDeviceManagerClientPtr.prototype.onDeviceAdded = function() {
    return UsbDeviceManagerClientProxy.prototype.onDeviceAdded
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbDeviceManagerClientProxy.prototype.onDeviceAdded = function(deviceInfo) {
    var params_ = new UsbDeviceManagerClient_OnDeviceAdded_Params();
    params_.deviceInfo = deviceInfo;
    var builder = new codec.MessageV0Builder(
        kUsbDeviceManagerClient_OnDeviceAdded_Name,
        codec.align(UsbDeviceManagerClient_OnDeviceAdded_Params.encodedSize));
    builder.encodeStruct(UsbDeviceManagerClient_OnDeviceAdded_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  UsbDeviceManagerClientPtr.prototype.onDeviceRemoved = function() {
    return UsbDeviceManagerClientProxy.prototype.onDeviceRemoved
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbDeviceManagerClientProxy.prototype.onDeviceRemoved = function(deviceInfo) {
    var params_ = new UsbDeviceManagerClient_OnDeviceRemoved_Params();
    params_.deviceInfo = deviceInfo;
    var builder = new codec.MessageV0Builder(
        kUsbDeviceManagerClient_OnDeviceRemoved_Name,
        codec.align(UsbDeviceManagerClient_OnDeviceRemoved_Params.encodedSize));
    builder.encodeStruct(UsbDeviceManagerClient_OnDeviceRemoved_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function UsbDeviceManagerClientStub(delegate) {
    this.delegate_ = delegate;
  }
  UsbDeviceManagerClientStub.prototype.onDeviceAdded = function(deviceInfo) {
    return this.delegate_ && this.delegate_.onDeviceAdded && this.delegate_.onDeviceAdded(deviceInfo);
  }
  UsbDeviceManagerClientStub.prototype.onDeviceRemoved = function(deviceInfo) {
    return this.delegate_ && this.delegate_.onDeviceRemoved && this.delegate_.onDeviceRemoved(deviceInfo);
  }

  UsbDeviceManagerClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kUsbDeviceManagerClient_OnDeviceAdded_Name:
      var params = reader.decodeStruct(UsbDeviceManagerClient_OnDeviceAdded_Params);
      this.onDeviceAdded(params.deviceInfo);
      return true;
    case kUsbDeviceManagerClient_OnDeviceRemoved_Name:
      var params = reader.decodeStruct(UsbDeviceManagerClient_OnDeviceRemoved_Params);
      this.onDeviceRemoved(params.deviceInfo);
      return true;
    default:
      return false;
    }
  };

  UsbDeviceManagerClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateUsbDeviceManagerClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kUsbDeviceManagerClient_OnDeviceAdded_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = UsbDeviceManagerClient_OnDeviceAdded_Params;
      break;
      case kUsbDeviceManagerClient_OnDeviceRemoved_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = UsbDeviceManagerClient_OnDeviceRemoved_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateUsbDeviceManagerClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var UsbDeviceManagerClient = {
    name: 'device.mojom.UsbDeviceManagerClient',
    kVersion: 0,
    ptrClass: UsbDeviceManagerClientPtr,
    proxyClass: UsbDeviceManagerClientProxy,
    stubClass: UsbDeviceManagerClientStub,
    validateRequest: validateUsbDeviceManagerClientRequest,
    validateResponse: null,
  };
  UsbDeviceManagerClientStub.prototype.validator = validateUsbDeviceManagerClientRequest;
  UsbDeviceManagerClientProxy.prototype.validator = null;
  exports.UsbDeviceFilter = UsbDeviceFilter;
  exports.UsbEnumerationOptions = UsbEnumerationOptions;
  exports.UsbDeviceManager = UsbDeviceManager;
  exports.UsbDeviceManagerPtr = UsbDeviceManagerPtr;
  exports.UsbDeviceManagerAssociatedPtr = UsbDeviceManagerAssociatedPtr;
  exports.UsbDeviceManagerClient = UsbDeviceManagerClient;
  exports.UsbDeviceManagerClientPtr = UsbDeviceManagerClientPtr;
  exports.UsbDeviceManagerClientAssociatedPtr = UsbDeviceManagerClientAssociatedPtr;
})();