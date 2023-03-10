export default (sequelize, DataTypes) =>
  sequelize.define(
    'AppsflyerReports',
    {
      'Attributed Touch Type': DataTypes.STRING,
      'Attributed Touch Time': DataTypes.STRING,
      'Install Time': DataTypes.STRING,
      'Event Time': DataTypes.STRING,
      'Event Name': DataTypes.TEXT,
      'Event Value': DataTypes.JSON,
      'Event Revenue': DataTypes.STRING,
      'Even Revenue Currency': DataTypes.STRING,
      'Event Revenue USD': DataTypes.STRING,
      'Event Source': DataTypes.STRING,
      'Is Receipt Validated': DataTypes.STRING,
      Partner: DataTypes.STRING,
      'Media Source': DataTypes.STRING,
      Channel: DataTypes.STRING,
      Keywords: DataTypes.STRING,
      Campaign: DataTypes.STRING,
      'Campaign ID': DataTypes.STRING,
      Adset: DataTypes.STRING,
      'Adset ID': DataTypes.STRING,
      Ad: DataTypes.STRING,
      'Ad ID': DataTypes.STRING,
      'Ad Type': DataTypes.STRING,
      'Site ID': DataTypes.STRING,
      'Sub Site ID': DataTypes.STRING,
      'Sub Param 1': DataTypes.STRING,
      'Sub Param 2': DataTypes.STRING,
      'Sub Param 3': DataTypes.STRING,
      'Sub Param 4': DataTypes.STRING,
      'Sub Param 5': DataTypes.STRING,
      'Cost Model': DataTypes.STRING,
      'Cost Value': DataTypes.STRING,
      'Cost Currency': DataTypes.STRING,
      'Contributor 1 Partner': DataTypes.STRING,
      'Contributor 1 Media Source': DataTypes.STRING,
      'Contributor 1 Campaign': DataTypes.STRING,
      'Contributor 1 Touch Type': DataTypes.STRING,
      'Contributor 1 Touch Time': DataTypes.STRING,
      'Contributor 2 Partner': DataTypes.STRING,
      'Contributor 2 Media Source': DataTypes.STRING,
      'Contributor 2 Campaign': DataTypes.STRING,
      'Contributor 2 Touch Type': DataTypes.STRING,
      'Contributor 2 Touch Time': DataTypes.STRING,
      'Contributor 3 Partner': DataTypes.STRING,
      'Contributor 3 Media Source': DataTypes.STRING,
      'Contributor 3 Campaign': DataTypes.STRING,
      'Contributor 3 Touch Type': DataTypes.STRING,
      'Contributor 3 Touch Time': DataTypes.STRING,
      Region: DataTypes.STRING,
      'Country Code': DataTypes.STRING,
      State: DataTypes.STRING,
      City: DataTypes.STRING,
      'Postal Code': DataTypes.STRING,
      DMA: DataTypes.STRING,
      IP: DataTypes.STRING,
      WIFI: DataTypes.STRING,
      Operator: DataTypes.STRING,
      Carrier: DataTypes.STRING,
      Language: DataTypes.STRING,
      'AppsFlyer ID': DataTypes.STRING,
      'Advertising ID': DataTypes.STRING,
      IDFA: DataTypes.STRING,
      'Android ID': DataTypes.STRING,
      'Customer User ID': DataTypes.STRING,
      IMEI: DataTypes.STRING,
      IDFV: DataTypes.STRING,
      Platform: DataTypes.STRING,
      'Device Type': DataTypes.STRING,
      'OS Version': DataTypes.STRING,
      'App Version': DataTypes.STRING,
      'SDK Version': DataTypes.STRING,
      'App ID': DataTypes.STRING,
      'App Name': DataTypes.STRING,
      'Bundle ID': DataTypes.STRING,
      'Is Retargeting': DataTypes.STRING,
      'Retargeting Conversion Type': DataTypes.STRING,
      'Attribution Lookback': DataTypes.STRING,
      'Reengagement Window': DataTypes.STRING,
      'Is Primary Attribution': DataTypes.STRING,
      'User Agent': DataTypes.TEXT,
      'HTTP Referrer': DataTypes.STRING,
      'Original URL': DataTypes.STRING,
      source: DataTypes.STRING,
    },
    {
      tableName: 'appsflyerReports',
      timestamps: false,
      sequelize,
    }
  );
