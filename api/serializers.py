__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GPL"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from rest_framework import serializers
from api.models import Module, Package, Process
import json

class JSONSerializerField(serializers.Field):
    """ Serializer for JSONField -- required to make field writable"""
    def to_internal_value(self, data):
        return json.dumps(data)
    def to_representation(self, value):
        return json.loads(value)

class ProcessSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='module.name', read_only=True)
    hidden = serializers.BooleanField(source='module.hidden', read_only=True)
    type = serializers.EmailField(source='module.type', read_only=True)
    form = JSONSerializerField(source='module.form', read_only=True)
    value = JSONSerializerField(required=False)
    status = serializers.SerializerMethodField()
    module = serializers.PrimaryKeyRelatedField(queryset=Module.objects.all())
    package = serializers.PrimaryKeyRelatedField(queryset=Package.objects.all())

    class Meta:
        model = Process
        fields = ('process_id', 'order', 'name', 'type', 'form', 'value', 'status', 'log_path', 'err_path', 'module', 'package', 'hidden')

    def get_status(self,obj):
        return obj.get_status_display()

class PackageSerializer(serializers.ModelSerializer):
    status = serializers.SerializerMethodField()

    class Meta:
        model = Package
        fields = ('package_id', 'name', 'path', 'file_name', 'status')

    def get_status(self,obj):
        return obj.get_status_display()

class PackageDetailSerializer(serializers.ModelSerializer):
    processes = ProcessSerializer(many=True)

    class Meta:
        model = Package
        fields = ('package_id', 'name', 'file_name', 'status', 'processes')


class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = ('module_id', 'name', 'type', 'hidden')
