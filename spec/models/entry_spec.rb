require 'spec_helper'

describe Entry do
  let(:entry) { FactoryGirl.create(:entry) }

  subject { entry }

  it { should respond_to(:url) }
  it { should respond_to(:longitude) }
  it { should respond_to(:latitude) }
  it { should respond_to(:likes) }
  it { should respond_to(:thumbnail_url) }
  it { should respond_to(:full_image_url) }
  it { should respond_to(:tags) }

  it { should be_valid}

  it { should validate_uniqueness_of(:url) }
  it { should validate_presence_of(:url) }
  it { should validate_presence_of(:longitude) }
  it { should validate_presence_of(:latitude) }


end