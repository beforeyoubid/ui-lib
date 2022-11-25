export const COLORS = {
  GRAY: '#dee1e3',
};

export const PRODUCT_TYPES = ['STRATA', 'BPI'];

export const PRODUCT_STATUSES = ['LIVE', 'CLOSED'];

export const Keys = {
  Component: {
    Button: 'Component.Button',
    Icon: 'Component.Icon',
    Input: 'Component.Input',
    Radio: {
      Root: 'Component.Radio',
      Label: 'Component.Radio.Label',
      Option: {
        Label: 'Component.Radio.Option.Label',
        Input: 'Component.Radio.Option.Input',
      },
    },
    Checkbox: {
      Root: 'Component.Checkbox',
      Input: 'Component.Checkbox.Input',
    },
    TextField: {
      Root: 'Component.TextField',
    },
    MenuItem: {
      Root: 'Component.MenuItem',
      Text: 'Component.MenuItem.Text',
      Icon: 'Component.MenuItem.Icon',
    },
    Avatar: {
      Root: 'Component.Avatar',
      Image: 'Component.Avatar.Image',
      Text: 'Component.Avatar.Text',
    },
    Dropdown: {
      Root: 'Component.Dropdown',
      Input: 'Component.Dropdown.Input',
      SingleValue: 'Component.Dropdown.SingleValue',
      Icon: 'Component.Dropdown.Icon',
      ClearIndicator: 'Component.Dropdown.ClearIndicator',
    },
    ImpersonateBar: {
      Button: 'Component.ImpersonateBar.Button',
    },
    Table: {
      Root: 'Component.Table',
      Header: {
        Root: 'Component.Table.Header',
        Label: 'Component.Table.Header.Label',
      },
      Row: {
        Root: 'Component.Table.Row',
        Cell: {
          Root: 'Component.Table.Row.Cell',
          Actions: 'Component.Table.Row.Cell.Actions',
        },
      },
    },
    TableFilter: {
      Search: 'Component.TableFilter.Search',
    },
    PageLoader: 'Component.PageLoader',
    Autocomplete: 'Component.Autocomplete',
    Address: {
      Root: 'Component.Address',
      Input: 'Component.Address.Input',
      GeoInput: 'Component.Address.GeoInput',
      Error: 'Component.Address.Error',
      Loading: 'Component.Address.Loading',
    },
    Cart: {
      Root: 'Component.Cart',
      Accordion: {
        Root: 'Component.Cart.Accordion',
      },
      PriceItem: {
        Root: 'Component.Cart.PriceItem',
        Cost: 'Component.Cart.PriceItem.Cost',
        Title: 'Component.Cart.PriceItem.Title',
        Eta: 'Component.Cart.PriceItem.Eta',
        RemoveReportButton: 'Component.Cart.PriceItem.RemoveReportButton',
      },
    },
    FormSection: {
      Root: 'Component.FormSection',
      NextButton: 'Component.FormSection.NextButton',
      CancelButton: 'Component.FormSection.CancelButton',
      SaveAsDefaultButton: 'Component.FormSection.SaveAsDefaultButton',
    },
    KebabMenu: {
      Root: 'Component.KebabMenu',
      MenuItem: 'Component.KebabMenu.MenuItem',
    },
  },
  Page: {
    Wrapper: {
      OrderReport: {
        Button: 'Page.Wrapper.OrderReport.Button',
      },
      SearchBar: {
        Root: 'Page.Wrapper.SearchBar',
      },
      Sidebar: {
        Root: 'Page.Wrapper.Sidebar',
        MenuItem: {
          Root: 'Page.Wrapper.Sidebar.MenuItem',
        },
      },
    },
    Dashboard: {
      PageWrapper: 'Page.Dashboard.PageWrapper',
      Card: 'Page.Dashboard.Card',
    },
    Users: {
      PageWrapper: 'Page.Users.PageWrapper',
      CancelButton: 'Page.Users.AddUserButton',
      SearchBox: 'Page.Users.SearchBox',
      UserTypeDropdown: 'Page.Users.UserTypeDropdown',
      OfficeDropdown: 'Page.Users.OfficeDropdown',
      StateDropdown: 'Page.Users.StateDropdown',
      StatusDropdown: 'Page.Users.StatusDropdown',
      Table: {
        Root: 'Page.Users.Table',
        Body: {
          Root: 'Page.Users.Table.Body',
        },
      },
    },
    Emails: {
      PageWrapper: 'Page.Emails.PageWrapper',
      Table: {
        Root: 'Page.Emails.Table',
        Body: {
          Root: 'Page.Emails.Table.Body',
          Row: 'Page.Emails.Table.Body.Row',
          Cell: {
            Id: 'Page.Emails.Table.Body.Row.IdCell',
            SentAt: 'Page.Emails.Table.Body.Row.SentAtCell',
            Subject: 'Page.Emails.Table.Body.Row.SubjectCell',
            SentTo: 'Page.Emails.Table.Body.Row.SentToCell',
            Attachments: 'Page.Emails.Table.Body.Row.AttachmentsCell',
            Actions: 'Page.Emails.Table.Body.Row.ActionsCell',
          },
        },
      },
    },
    AddUser: {
      PageWrapper: 'Page.AddUser.PageWrapper',
      CancelButton: 'Page.AddUser.CancelButton',
      UserTypeDropdown: 'Page.AddUser.UserTypeDropdown',
    },
    OrderReport: {
      PageWrapper: 'Page.OrderReport.PageWrapper',
      ChooseReportStep: {
        ProductTypeCard: 'Page.OrderReport.ChooseReportStep.ProductTypeCard',
      },
      RelatedUserStep: {
        Dropdown: 'Page.OrderReport.RelatedUserStep.Dropdown',
      },
      PaymentStep: {
        CardholderName: 'Page.OrderReport.PaymentStep.CardholderName',
        StripeDetails: 'Page.OrderReport.PaymentStep.StripeDetails',
        AcceptSecondCharge: 'Page.OrderReport.PaymentStep.AcceptSecondCharge',
      },
    },
    Products: {
      PageWrapper: 'Page.Products.PageWrapper',
      Header: 'Page.Products.Header',
      Table: {
        Header: 'Page.Products.Table.Header',
        Body: {
          Root: 'Page.Products.Table.Body',
          Row: {
            Root: 'Page.Products.Table.Body.Row',
          },
        },
      },
    },
    Office: {
      PageWrapper: 'Page.Office.PageWrapper',
    },
    Offices: {
      PageWrapper: 'Page.Offices.PageWrapper',
      AddOfficeButton: 'Page.Offices.AddOfficeButton',
      SearchBox: 'Page.Offices.SearchBox',
      HeadOfficeDropdown: 'Page.Offices.HeadOfficeDropdown',
      StaffContactDropdown: 'Page.Offices.StaffContactDropdown',
      Table: {
        Root: 'Page.Offices.Table',
        Header: 'Page.Offices.Table.Header',
        Body: {
          Root: 'Page.Offices.Table.Body',
          Row: {
            Root: 'Page.Offices.Table.Body.Row',
          },
        },
      },
    },
    AssistOffices: {
      PageWrapper: 'Page.AssistOffices.PageWrapper',
      AddOfficeButton: 'Page.AssistOffices.AddOfficeButton',
      SearchBox: 'Page.AssistOffices.SearchBox',
      HeadOfficeDropdown: 'Page.AssistOffices.HeadOfficeDropdown',
      Table: {
        Root: 'Page.AssistOffices.Table',
        Header: 'Page.AssistOffices.Table.Header',
        Body: {
          Root: 'Page.AssistOffices.Table.Body',
          Row: {
            Root: 'Page.AssistOffices.Table.Body.Row',
          },
        },
      },
    },
    HeadOffices: {
      PageWrapper: 'Page.HeadOffices.PageWrapper',
    },
    AddOffice: {
      PageWrapper: 'Page.AddOffice.PageWrapper',
      CancelButton: 'Page.AddOffice.CancelButton',
      RegionDropdown: 'Page.AddOffice.RegionDropdown',
      HeadOfficeDropdown: 'Page.AddOffice.HeadOfficeDropdown',
      StaffContactDropdown: 'Page.AddOffice.StaffContactDropdown',
      OfficeName: 'Page.AddOffice.OfficeName',
      PartnerID: 'Page.AddOffice.PartnerID',
      Email: 'Page.AddOffice.Email',
      Phone: 'Page.AddOffice.Phone',
      ABN: 'Page.AddOffice.ABN',
      Address: 'Page.AddOffice.Address',
      UtilitiesConnections: 'Page.AddOffice.UtilitiesConnections',
      ReferralFees: 'Page.AddOffice.ReferralFees',
      Save: 'Page.AddOffice.Save',
    },
  },
};
